import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import './TodoList.css'

const TodoList = ({ todos, onTodoClick, onTodoRemove }) => (
  <ul className='list'>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} onRemove={() => onTodoRemove(todo.id)} />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired
}

export default TodoList
