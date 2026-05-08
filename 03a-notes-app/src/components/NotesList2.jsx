import NotesItem2 from './NotesItem2';
import {useNotes} from '../store/notesStore';

function NotesList2({ setEditingNote, search }) {
  const notes = useNotes((state) => state.notes);

  //  If search is empty, show all notes
  const filteredNotes = search.trim()
    ? notes.filter(
        (note) =>
          note.title.toLowerCase().includes(search.toLowerCase()) ||
          note.content.toLowerCase().includes(search.toLowerCase())
      )
    : notes;

  //  Sort pinned first, then by updatedAt
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (a.pinned !== b.pinned) {
      return b.pinned - a.pinned;
    }
    return b.updatedAt - a.updatedAt;
  });

  return (
    <>
      {sortedNotes.map((note) => (
        <NotesItem2
          key={note.id}
          note={note}
          setEditingNote={setEditingNote}
        />
      ))}
    </>
  );
}

export default NotesList2;
