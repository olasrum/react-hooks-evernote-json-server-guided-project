import React from "react";

function NoteItem({note, onNoteClick}) {
  function handleClick() {
    onNoteClick(note)
  }

  return (
    <li >
      <h2 key={note.id} onClick={handleClick}>{note.title}</h2>
      <p>{note.body.substring(0, 25)}...</p>
    </li>
  );
}

export default NoteItem;
