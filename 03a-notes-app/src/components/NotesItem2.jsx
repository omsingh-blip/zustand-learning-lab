import { useNotes } from "../store/notesStore";

function NotesItem2({note, setEditingNote}){

    const deleteNote= useNotes((state)=> state.deleteNote)
    const togglePin = useNotes((state)=> state.togglePin)
  

    function editNote(){
        setEditingNote(note)
    }

    return(
        <>
        <h3 style={{color: note.pinned ? 'green' : 'black'}}>{note.title}</h3>
        <p>{note.content}</p>

        <button onClick={()=> deleteNote(note.id)}>Delete</button>
        <button onClick={editNote}>Edit</button>
        <button onClick={()=> togglePin(note.id)}>{note.pinned ? 'Unpin' : 'Pin'}</button>
        
        </>
    )
}

export default NotesItem2;