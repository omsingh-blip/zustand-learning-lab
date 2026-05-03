# 🧠 Zustand – Todo App Notes

---

## 🎯 Goal

Understand real-world state management using Zustand by building a Todo App.

---

## 🔹 Core Zustand Concepts

* Creating a store with `create()`
* Updating state using `set()`
* Co-locating actions (logic) inside the store
* Treating the store as the single source of truth

### 🧩 Basic Store Snippet

```js
import { create } from 'zustand'

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) => {},
  toggleTodo: (id) => {},
  deleteTodo: (id) => {},
}))
```

---

## 🔹 State Modeling

* Todos as an array of objects
* Each todo: `{ id, text, completed }`
* Using unique IDs for reliable updates
* Designing state to scale (basis for Kanban)

### 🧩 Example State

```js
[
  { id: 1, text: "Learn Zustand", completed: false }
]
```

---

## 🔹 Immutable Updates (Critical)

### ❓ What is Immutability?

Not changing the original state directly. Instead, you create a new version of the state.

### ❌ Wrong (Mutation)

```js
state.todos.push(newTodo) // ❌ directly modifying
```

### ✅ Correct (Immutable)

```js
set((state) => ({
  todos: [...state.todos, newTodo]
}))
```

---

## 🔥 Why Immutability is IMPORTANT

### 1. React Re-rendering

React detects changes using reference comparison.

* If you mutate → React may NOT re-render
* If you create new state → React detects change → UI updates

### 2. Predictable State

* No hidden side effects
* Easier debugging

### 3. Avoid Bugs

* Mutation can break previous state references
* Leads to unexpected UI behavior

### 4. Better Performance Patterns

* Enables optimizations like memoization
* Works well with selectors

---

## 🔹 Immutable Patterns You Used

### ➕ Add Todo

```js
addTodo: (text) =>
  set((state) => ({
    todos: [
      ...state.todos,
      { id: Date.now(), text, completed: false }
    ]
  }))
```

### 🔄 Toggle Todo

```js
toggleTodo: (id) =>
  set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  }))
```

### ❌ Delete Todo

```js
deleteTodo: (id) =>
  set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id)
  }))
```

---

## 🔹 Store Actions (Business Logic)

* `addTodo(text)` → create + append
* `toggleTodo(id)` → update specific item
* `deleteTodo(id)` → remove item
* Keep logic out of components

---

## 🔹 React Integration

* Consuming store with hooks
* Using selectors for performance:

```js
const todos = useTodoStore((state) => state.todos)
```

* Avoid subscribing to the entire store

---

## 🔹 Local vs Global State

* Local (`useState`) → UI/input state
* Global (Zustand) → shared data (todos)
* Clear separation of concerns

---

## 🔹 Input Handling & Validation

### 🧩 Example

```js
const handleAdd = () => {
  const value = text.trim()
  if (!value) return

  addTodo(value)
  setText('')
}
```

* Controlled inputs via `useState`
* Validation using `trim()`
* Prevent empty/invalid entries
* Reset input after submit

---

## 🔹 Event Handling Patterns

* `handleAdd` for submission flow
* Click + Enter key handling

---

## 🔹 Derived State (Intro)

* Total todos count
* Completed todos count

### 🧩 Example

```js
const completedCount = todos.filter(t => t.completed).length
```

👉 Compute in UI, don’t store in Zustand

---

## 🎯 Key Takeaways

* Never mutate state directly
* Always use immutable updates (spread, map, filter)
* Validate input before updating state
* Keep business logic inside the store
* Use selectors to avoid unnecessary re-renders
* Keep UI simple; store handles complexity

---

Here’s your explanation captured in a **Markdown-ready canvas note** so you can copy it straight into your `notes/` folder or `README.md`:

---

# React Input: `e.target.value`

### Code
```jsx
<input
  value={text}
  onChange={(e) => setText(e.target.value)}
  placeholder="Enter todo"
/>
```

---

## 🔎 Breakdown

1. **`onChange={(e) => ...}`**
   - Runs whenever the user types in the input.
   - React passes an **event object** (`e`) to this function.

2. **`e.target`**
   - Refers to the element that triggered the event.
   - Here, it’s the `<input>` element.

3. **`e.target.value`**
   - `.value` is the property of an input element that holds the current text.
   - So `e.target.value` is literally “whatever the user typed.”

4. **`setText(e.target.value)`**
   - Updates React state (`text`) with the new input value.
   - Because the input’s `value` prop is tied to `text`, React re-renders and keeps the input box in sync.


---

## 🚀 Next Improvements

* Persistence (localStorage)
* Split into components (TodoItem, TodoList)
* Filters (All / Active / Completed)
* Prepare for Kanban (columns + movement)

---

## ✅ Ready Check

If you can explain immutability + apply all patterns above, you’re ready to move forward.
