import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import './App.css'

// Tratar a div tag com o .css etc, em vez do Card, e.g. container

const App = () => (
  <div className='container'>
    <h1 className='title'> My Todo List </h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
