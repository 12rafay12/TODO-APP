import React, { useState } from 'react'
import Header from './Components/Header'
import "./Todo.scss"
import Form from './Components/Form'
import TodoList from './Components/TodoList'
import { setSelectedIndex } from '../../features/TodoSlice'
import { useDispatch } from "react-redux";

const Todo = () => {
  const dispatch=useDispatch();
  const[input,setInput]=useState("");

 const onEdit = (index, title) => {
  setInput(title)
  dispatch(setSelectedIndex(index))

  }
  return (
    <div className="todo-container">
        <div className="todo-app-wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Form 
            input={input}
            setInput={setInput}
            />
          </div>
          <div>
            <TodoList
            input={input}
            setInput={setInput}
            handleEdit={onEdit}/>
          </div>
        </div> 
      
    </div>
  )
}

export default Todo
