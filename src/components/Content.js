import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({notes, setNotes, editNote, onChangeNote, onEditNoteViewer, onEditNoteEditor, onCancelNote}) {

  function handleDeleteNote(id) {
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
      const updatedNotes = notes.filter((note) => note.id !==id);
      setNotes(updatedNotes)
    })
  }
  
 
  const displayNoteViewer = notes.map((note) => {
    return <NoteViewer 
              key={note.id}
              note={note}
              onEditNoteViewer={onEditNoteViewer}
              onDeleteNote={handleDeleteNote}
            />
  });

  const getContent = () => {
    if (editNote) {
      return <NoteEditor 
                note={editNote} 
                onChangeNote={onChangeNote} 
                onEditNoteEditor={onEditNoteEditor}
                onCancelNote={onCancelNote}
              />
    } else if (!editNote) {
      return displayNoteViewer
    } else {
      return <Instructions />
    }
  };

  return (
      <div className="master-detail-element detail">
      {getContent()}
      </div>
  )
}

export default Content;
