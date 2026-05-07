import { useState } from 'react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'

function App() {
  const [editingNote, setEditingNote] = useState(null)

  return (
    <div>
      <h1>Notes App</h1>

      <NoteForm
        editingNote={editingNote}
        setEditingNote={setEditingNote}
      />

      <NoteList setEditingNote={setEditingNote} />
    </div>
  )
}

export default App