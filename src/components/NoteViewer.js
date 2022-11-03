import React from "react";

function NoteViewer({note, onEditNoteViewer, onDeleteNote}) { 
  function handleEditClick() {
    onEditNoteViewer(note)
  }

  function handleDeleteClick() {
    onDeleteNote(note.id)
  }

  return (
    <div >
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div> 
  );
}

export default NoteViewer;
