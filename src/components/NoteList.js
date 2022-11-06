import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, editNote, onShowNote, onCancelNote}) {
  const displayNotes = notes.map((note) => {
    return <NoteItem 
              key={note.id}
              note={note}
              editNote={editNote}
              onShowNote={onShowNote}
              onCancelNote={onCancelNote}
            />
  })

  return (
    <ul>
      {displayNotes}
    </ul>
  );
}

export default NoteList;
