import types from './actionTypes'

let todoId = 0

export const addTodo = text => {
  return {
    type: types.ADD_TODO,
    id: todoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: types.TOGGLE_TODO,
    id
  }
}

export const removeTodo = id => {
  return {
    type: types.REMOVE_TODO,
    id
  }
}

export const editTodo = (id, text) => {
  return {
    type: types.EDIT_TODO,
    id,
    text
  }
}
