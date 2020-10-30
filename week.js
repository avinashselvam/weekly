import React, {useState} from 'react'
import { connect } from 'react-redux'
import './week.css'

import { hideCollapse, updateTodos, addTodos } from './actions'

function mapState(state) {
  const key = String(state.selectedYear) + String(state.selectedWeek)
  const todos = state.todos[key] ? state.todos[key] : [""]
  return {
    show: state.collapse,
    week: state.selectedWeek,
    year: state.selectedYear,
    todos: todos
  }
}

function mapDispatch(dispatch) {
  return {
    hideWeek: () => dispatch(hideCollapse()),
    updateTodos: (year, week, todos) => dispatch(updateTodos(year, week, todos)),
    addTodos: (year, week) => dispatch(addTodos(year, week))
  }
}

function Week(props) {

  const toggle = props.show
  const toggleClass = toggle ? "show" : "hide"

  const week = props.week
  const year = props.year
  let todos = props.todos

  function changeTodos(day, todo) {
    todos[day] = todo
    props.updateTodos(year, week, todos)
  }

  function handleKeyPress(key, index) {
    if(key === 'Enter') {
      if(index == todos.length-1) props.addTodos(year, week)
    }
  }

  return (
    <div className={"week collapse " + toggleClass}>
      <div className="bar">
        <button class="close button" onClick={props.hideWeek}><i class="fa fa-times"></i></button>
        <div className="title">
          <h1>Week {week} of Year {year}</h1>
          <h2>Your goals for the week</h2>
        </div>
      </div>
      {todos.map((todo, index) =><div class="todo"><input
      defaultValue={todo}
      onChange={(e) => changeTodos(index, e.target.value)}
      onKeyPress={(e) => handleKeyPress(e.key, index)}></input>
      <button class="finish button"><i class="fa fa-check"></i></button></div>)}
    </div>
  );
}

export default connect(mapState, mapDispatch)(Week)
