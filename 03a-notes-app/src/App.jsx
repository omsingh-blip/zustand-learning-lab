import {useState} from 'react'
import NotesForm2 from './components/NotesForm2';
import NotesList2 from './components/NotesList2';


function App(){

  const[editingNote, setEditingNote] = useState(null);
  const [search, setSearch] = useState('')

  return(
    <>
    <div>
    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" style={{marginBottom:'3rem'}} placeholder='Search' />
    </div>
    <NotesForm2
    editingNote={editingNote}
    setEditingNote={setEditingNote}></NotesForm2>

    <NotesList2
    setEditingNote={setEditingNote}
    search={search}
    ></NotesList2>
    </>
  )
}

export default App;