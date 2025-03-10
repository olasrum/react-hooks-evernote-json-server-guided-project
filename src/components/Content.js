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
function Content({notes, editNote, onChangeNote, onDeleteNote, onEditNoteViewer, onEditNoteEditor, onCancelNote}) {

  const displayNoteViewer = notes.map((note) => {
    return <NoteViewer 
              key={note.id}
              note={note}
              onEditNoteViewer={onEditNoteViewer}
              onDeleteNote={onDeleteNote}
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
