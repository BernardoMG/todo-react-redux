import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Button, Input } from 'semantic-ui-react'
import './addTodo.css'

let AddTodo = ({ dispatch }) => {
  return (
    <div className='addTodoContainer'>
      <form
        onSubmit={e => {
          e.preventDefault()
          const input = document.querySelector('input[name=todo]')

          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
        <Input className='input' placeholder='Task...' name='todo' />
        <Button className='addTodoButton' type='submit'>
          Add Todo
        </Button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
