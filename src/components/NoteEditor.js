import React from "react";

function NoteEditor({note, onChangeNote, onEditNoteEditor, onCancelNote}) {

  function handleInputChange(e) {
    onChangeNote(e.target.name, e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/notes/${note.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    })
    .then((r) => r.json())
    .then(onEditNoteEditor);
  }

  function handleCancelClick() {
    onCancelNote(note)
  }

  if (!note) return null;

  return (
    <form onSubmit={handleSubmit} className="note-editor">
      <input value={note.title} onChange={handleInputChange} type="text" name="title" />
      <textarea value={note.body} onChange={handleInputChange} name="body" />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button onClick={handleCancelClick} type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
