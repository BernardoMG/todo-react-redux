import React, { Component } from 'react'
import './AddTodoForm.css'

class AddTodoForm extends Component {
  handleSubmit (event) {
    let input = this.refs.input
    event.preventDefault()
    if (!input.value.trim()) {
      return
    }
    this.props.addTodo(input.value)
    input.value = ''
  }

  render () {
    return (
      <div className='addTodoContainer'>
        <form className='ui form' id='form' onSubmit={this.handleSubmit.bind(this)}>
          <input className='ui input' id='input' placeholder='Task...' name='todo' ref='input' />
          <button className='ui button' id='addTodoButton' type='submit'>
              Add Todo
          </button>
        </form>
      </div>
    )
  }
}

export default AddTodoForm
