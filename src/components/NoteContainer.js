import React, {useEffect, useState} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([]);
  const [noteDetails, setNoteDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [editNote, setEditNote] = useState(null);
  const [cancelNote, setCancelNote] = useState(false);
  

  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then((r) => r.json())
    .then((notes) => setNotes(notes))
  }, [])

  function handleShowNote(showNote) {
    const displayNoteDetails = noteDetails.find((note) => note.id === showNote.id);
       if (!displayNoteDetails) {
       setNoteDetails([showNote]);
  }
  }

  function handleAddNote(newNote) {
   setNotes([...notes, newNote])
  }

  function handleChangeNote(name, value) {
    setEditNote({...editNote, [name]: value,})
  }

  function handleEditNoteViewer(editedNote) {
    setEditNote(editedNote)
  }

  
  function handleEditNoteEditor(editedNote) {
    const updatedNotes = notes.map((note) => 
    note.id === editedNote.id ? editedNote : note);
    setEditNote(editedNote)
    setNotes(updatedNotes);
  }

  function handleCancelNote() {
    setCancelNote(!cancelNote);
    setEditNote(!editNote)
  };

  function handleDeleteNote(id) {
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
      const updatedNotes = notes.filter((note) => note.id !==id)
      setNotes(updatedNotes)
      const deletedNotes = noteDetails.filter((note) => note.id !==id)
      setNoteDetails(deletedNotes)
    })
  }

  const searchNotes = notes.filter((note) =>
  note.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Search onSearch={setSearch}/>
      <div className="container">
        <Sidebar 
          notes={searchNotes} 
          editNote={editNote}
          setNotes={setNotes} 
          onShowNote={handleShowNote} 
          onAddNote={handleAddNote}
          onCancelNote={handleCancelNote}
          />
        <Content 
          notes={noteDetails} 
          editNote={editNote}
          onDeleteNote={handleDeleteNote}
          onChangeNote={handleChangeNote} 
          onEditNoteViewer={handleEditNoteViewer} 
          onEditNoteEditor={handleEditNoteEditor}
          onCancelNote={handleCancelNote}/>
      </div>
    </>
  );
}

export default NoteContainer;
