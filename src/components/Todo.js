import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Todo.css'

// const Todo = ({ onClick, completed, text, onRemove, onEdit }) => (
//   <li className='itens'>
//     <a onClick={onRemove} className='ref-remove'>
//       <i className='remove icon' />
//     </a>
//     <a onClick={onEdit} className='ref-edit'>
//       <i className='edit icon' />
//     </a>
//     {/* <Checkbox onClick={onClick} checked={completed} label={(
//       <label>
//         {text}
//       </label>
//     )} />  */}
//     <input className='toggle' type='checkbox' checked={completed} onChange={onClick} />
//     <label onDoubleClick={this.handleDoubleClick}>
//       {text}
//     </label>
//   </li>
// )

// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired,
//   onRemove: PropTypes.func.isRequired,
//   onEdit: PropTypes.func.isRequired
// }

// export default Todo

export default class Todo extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  render() {
    const { onClick, completed, text, onRemove, onEdit } = this.props

    let element
    if (this.state.editing) {
      // element = (
      //   <TodoTextInput text={todo.text}
      //                  editing={this.state.editing}
      //                  onSave={(text) => this.handleSave(todo.id, text)} />
      // )
    } else {
      element = (
        <div className='view'>
          <input className='toggle' type='checkbox' checked={completed} onChange={onClick} />
          <label onDoubleClick={this.handleDoubleClick}>
            {text}
          </label>
          <i className='remove icon' onClick={onRemove} />
        </div>
      )
    }

    return (
      <li className='itens'>
        {element}
      </li>
    )
  }
}
