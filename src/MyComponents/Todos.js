import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div classname = "container">
      <h3 className= "text-center my 3">Todo Lists</h3>
      {/*props.todos*/} 
      <TodoItem todo = {props.todos[0]} />
    </div>
  )
}
