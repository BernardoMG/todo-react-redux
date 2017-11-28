import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'
import './Todo.css'

const Todo = ({ onClick, completed, text, onRemove }) => (
  <li className='itens'>
    <a onClick={onRemove} className='ref-remove'>
      <i className='remove icon' />
    </a>
    <a href={''} className='ref-edit'>
      <i className='edit icon' />
    </a>
    <Checkbox onClick={onClick} checked={completed} label={(
      <label>
        {text}
      </label>
    )} />
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Todo
