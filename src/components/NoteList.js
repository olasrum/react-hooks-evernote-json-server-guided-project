import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onShowNote}) {
  const displayNotes = notes.map((note) => {
    return <NoteItem 
              key={note.id}
              note={note}
              onNoteClick={onShowNote}
            />
  })

  return (
    <ul>
      {displayNotes}
    </ul>
  );
}

export default NoteList;
