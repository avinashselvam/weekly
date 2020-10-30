
let grid = []
for(let i=0; i<52; i++){
  let arr = []
  for(let j=0; j<70; j++){
    arr.push(90*i+j)
  }
  grid.push(arr)
}

const initState = {
    collapse: true,
    selectedWeek: 21,
    selectedYear: 25,
    todos: {
        "2521": ["Hello", "Hi"]
    }
}

function reducer(state=initState, action) {
    const payload = action.payload
    let week, year, todos, key, prevTodos
    switch (action.type) {
        case 'SHOW_COLLAPSE':
            week = payload.week
            year = payload.year
            return {...state, collapse: true, selectedWeek: week, selectedYear: year}

        case 'HIDE_COLLAPSE':
            return {...state, collapse: false}

        case 'ADD_TODOS':
            week = payload.week
            year = payload.year
            key = String(year)+String(week)
            todos = payload.todos
            prevTodos = state.todos[key] ? state.todos[key] : []
            return {...state, todos: {...state.todos, [key]: [...prevTodos, ""]}}

        default: return state
    }
}

export default reducer