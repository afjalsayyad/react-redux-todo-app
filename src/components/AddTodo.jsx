import React from 'react'
import { addtodo } from '../feature/todoSlice'
import { useDispatch } from 'react-redux'

function AddTodo() {
   
    const [input,setInput] = React.useState("")
    const dispatch = useDispatch()
    
     const handleSubmit  = (e) => {
      e.preventDefault()
     if (!input.trim()) return
     dispatch(addtodo(input))
     setInput("")
}

  return (
    <form onSubmit={handleSubmit}>

      <input type="text" 
             placeholder='Enter a Todo...'
             value={input} 
             onChange={(e) => setInput(e.target.value)} 
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-8 leading-8 transition-colors duration-200 ease-in-out"
            />

      <button type='submit'
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ml-4"
        >
         Add Todo
      </button>
    </form>
  )
}

export default AddTodo
