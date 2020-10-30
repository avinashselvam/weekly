export function showCollapse(week, year) {
    return {
        type: 'SHOW_COLLAPSE',
        payload: {
            week,
            year
        }
    }
}

export function hideCollapse() {
    return {
        type: 'HIDE_COLLAPSE'
    }
}

export function updateTodos(year, week, todos) {
    return {
        type: 'UPDATE_TODOS',
        payload: {
            year,
            week,
            todos
        }
    }
}

export function addTodos(year, week) {
    return {
        type: 'ADD_TODOS',
        payload: {
            year,
            week
        }
    }
}