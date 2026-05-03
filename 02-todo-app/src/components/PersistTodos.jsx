import { useState } from "react";
import { usePersistTodo } from "../store/persistTodoStore";

function PersistTodos(){

    const [text, setText] = useState('')
    const todos= usePersistTodo((state)=> state.todos);
    const addTodo = usePersistTodo((state)=> state.addTodo);
    const toggleTodo= usePersistTodo((state)=> state.PersistTodos);
    const deleteTodo=usePersistTodo((state)=> state.deleteTodo);

    function handleTodo(){
        if(!text.trim()){
            alert('Please Enter Your todo')
        }
        addTodo(text)
        setText('')
    }
    return(
<>
        <div style={{paddeing: 3}}>

        <h2>Todos</h2>

        <input 
        value={text} 
        placeholder="Enter your todos" 
        onChange={(e)=> setText(e.target.value) }
        onKeyDown={(e)=> {if(e.key==='Enter') handleTodo()}} />

        <button onClick={handleTodo}>Add</button>

        <ul>
           {todos.map( todo=> 
           <li key={todo.id}>

            <span onClick={()=>toggleTodo(todo.id)} style={{textDecoration: todo.completed? 'line-through' : 'none'}}>{todo.text}</span>
            <button onClick={()=> deleteTodo(todo.id)}>X</button>

           </li>)}
        </ul>
      <span style={{padding: 2}}>{todos.length} todos</span> |
      <span style={{padding: 2}}>{todos.filter(t => t.completed).length} completed</span>
        </div>
</>
    )


}

export default PersistTodos;