import { createSelector } from 'reselect'
import types from '../actions/actionTypes'

const getVisibilityFilter = (state) => state.visibilityFilter
const getTodos = (state) => state.todos

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case types.SHOW_ALL:
        return todos
      case types.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case types.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        return 'Error while filtering'
    }
  }
)
