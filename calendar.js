import React from 'react'
import './calendar.css'
import Block from './block'

function Calendar() {
  let grid = []
  for(let i=0; i<52; i++){
    let arr = []
    for(let j=0; j<70; j++){
      arr.push(90*i+j)
    }
    grid.push(arr)
  }
  
  return (
    <div className="container">
    <div className="calendar">
      {grid.map((year, i) => {
        return (<div className="year">{
          year.map((week, j) => {
            return (<Block year={j+1} week={i+1}></Block>)
          })}</div>)
      })}
    </div>
    </div>
  );
}

export default Calendar
