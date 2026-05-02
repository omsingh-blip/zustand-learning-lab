import { useState } from 'react'
import { useTodoStore } from './store/toDoStore'

function App() {
  const [text, setText] = useState('')
  const todos = useTodoStore((state) => state.todos)
  const addTodo = useTodoStore((state) => state.addTodo)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const deleteTodo = useTodoStore((state) => state.deleteTodo)

  const handleAdd = () => {
    if (!text.trim()) return
    addTodo(text)
    setText('')
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo App</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App