import types from '../actions/actionTypes'

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case types.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case types.REMOVE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )
    case types.EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, text: action.text }
          : todo
      )
    default:
      return state
  }
}

export default todos
