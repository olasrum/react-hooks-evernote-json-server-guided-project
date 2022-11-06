import React from "react";

function NoteItem({note, editNote, onShowNote, onCancelNote}) {
  function handleClick() {
    if(editNote) {
      return onCancelNote(note)
    } else {
      return onShowNote(note)
    }  
  }

  return (
    <li >
      <h2 key={note.id} onClick={handleClick}>{note.title}</h2>
      <p>{note.body.substring(0, 25)}...</p>
    </li>
  );
}

export default NoteItem;
