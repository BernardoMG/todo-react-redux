import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EditTodo from './EditTodo'
import './Todo.css'

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

  handleSave = (text) => {
    if (text.length === 0) {
      this.props.onRemove()
    } else {
      this.props.onEdit(text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { onClick, completed, text, onRemove } = this.props

    let element
    if (this.state.editing) {
      element = (
        <EditTodo text={text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(text)} />
      )
    } else {
      element = (
        <div className='view'>
          <i className='remove icon' id='remove' onClick={onRemove} />
          <input className='toggle' id='checkbox' type='checkbox' checked={completed} onChange={onClick} />
          <label id='todoLabel' onDoubleClick={this.handleDoubleClick}>
            {text}
          </label>
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
