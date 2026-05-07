import { useNoteStore } from '../store/notesStore'

function NoteItem({ note, setEditingNote }) {
  const deleteNote = useNoteStore((state) => state.deleteNote)

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>

      <button onClick={() => setEditingNote(note)}>Edit</button>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  )
}

export default NoteItem