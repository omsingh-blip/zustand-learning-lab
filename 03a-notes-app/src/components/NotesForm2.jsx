import { useNotes } from "../store/notesStore";
import { useState } from "react";

function NotesForm2({editingNote, setEditingNote}){

    const [title, setTitle] = useState(editingNote?.title || '');
    const [content, setContent] = useState(editingNote?.content || '');

    const updateNote = useNotes((state)=> state.updateNote);
    const addNote= useNotes((state)=> state.addNote);

    function handleAdd(){

        if(!title.trim() || !content.trim()){
            alert("Must enter title and content")
        }

        if(editingNote){
            updateNote(editingNote.id ,title, content);
            setEditingNote(null)
        }else{
            addNote(title, content);
        }

        setTitle('');
        setContent('')
    }

    return(
        <>
        <input value={title}
        onChange={(e)=> setTitle(e.target.value)}
        placeholder="Title" />
        

        <textarea value={content}
        onChange={(e)=> setContent(e.target.value)}
        placeholder="Content"></textarea>

        <button onClick={handleAdd}>{editingNote? 'Update' : 'Add'}</button>
        </>
    )
}

export default NotesForm2;