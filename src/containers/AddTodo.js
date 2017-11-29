import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import './addTodo.css'

class AddTodo extends Component {
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)
