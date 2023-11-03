import { useState } from "react";
import { NoteList } from "./components/NoteList"
import { NotesForm } from "./components/NotesForm";

import data from './Data/notes.json';

function App() {
  const [notes, setNotes] = useState(data)
  const [newNote, setNewNote] = useState({
    userId: 1,
    id:1,
    title:'',
    completed: false
  })

  const submitNote = (e) => {
    e.preventDefault()
    const tNotes = [...notes]
    tNotes.push(newNote)
    setNotes(tNotes)
}

  const handleChangeInput = (e) =>{
      setNewNote({...newNote , title:e.target.value})
  }

  return (
    <>
      <NotesForm action = {submitNote} handle = {handleChangeInput}/>
      <NoteList notes = {notes}/>
    </>
  )
}

export default App
