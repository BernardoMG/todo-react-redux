import { connect } from 'react-redux'
import { toggleTodo, removeTodo, editTodo } from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../selectors/filter'

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    onTodoRemove: id => {
      dispatch(removeTodo(id))
    },
    onTodoEdit: (id, text) => {
      dispatch(editTodo(id, text))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
