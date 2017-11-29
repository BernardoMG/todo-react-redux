import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import './TodoList.css'

const TodoList = ({ todos, onTodoClick, onTodoRemove, onTodoEdit }) => (
  <ul className='list'>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo}
        onClick={() => onTodoClick(todo.id)}
        onRemove={() => onTodoRemove(todo.id)}
        onEdit={() => {
          // document.querySelector('input[name=todo]').value = todo.text
          // document.querySelector('.addTodoButton').style.display = 'none'
          // let button = document.createElement('Button')
          // button.className = 'ui button editButton'
          // button.id = 'editButton'
          // button.textContent = 'Edit'
          // button.onclick = function () {
          //   onTodoEdit(todo.id, document.querySelector('input[name=todo]').value)
          // }
          // button.type = 'submit'
          // document.querySelector('.form').appendChild(button)
        }}
      />
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
  onTodoRemove: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired
}

export default TodoList
