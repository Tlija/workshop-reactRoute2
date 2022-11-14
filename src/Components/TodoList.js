import React from 'react'
import Todos from './Todos'
const TodoList = ({todos}) => {
  return (
    <div  style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
        {todos.map(
(todo)=><Todos todo={todo} key={todo.id}/>

        )}
    </div>
  )
}

export default TodoList