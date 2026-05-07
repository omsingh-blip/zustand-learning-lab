import { useState } from 'react'
import { useNoteStore } from '../store/notesStore'

function NoteForm({ editingNote, setEditingNote }) {
  const [title, setTitle] = useState(editingNote?.title || '') // setting default value of title to editingNote's title if it exists, otherwise empty string
  
  const [content, setContent] = useState(editingNote?.content || '')

  const addNote = useNoteStore((state) => state.addNote)
  const updateNote = useNoteStore((state) => state.updateNote)

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return //if title or content is empty, do not submit

    if (editingNote) {
      updateNote(editingNote.id, title, content)
      setEditingNote(null)
    } else {
      addNote(title, content)
    }

    setTitle('')
    setContent('')
  }

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />

      <button onClick={handleSubmit}>
        {editingNote ? 'Update' : 'Add'}
      </button>
    </div>
  )
}

export default NoteForm  