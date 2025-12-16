import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  
  return (
    <>
  <h1 className="text-4xl font-bold text-center mb-6 text-gray-100">
         Redux Toolkit {''}
    <span className="text-yellow-500">Todo App</span>
</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
