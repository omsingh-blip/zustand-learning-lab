import { useNoteStore } from '../store/notesStore'
import NoteItem from './NoteItem'

function NoteList({ setEditingNote }) {
  const notes = useNoteStore((state) => state.notes)

  return (
    <div>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          setEditingNote={setEditingNote}
        />
      ))}
    </div>
  )
}

export default NoteList