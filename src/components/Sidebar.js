import React, {useState} from "react";
import NoteList from "./NoteList";

function Sidebar({notes, onShowNote, onAddNote}) {
  const [addNew, setAddNew] = useState({
    title: "Default title",
    body: "Default body",
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setAddNew({...addNew, [name]: value,});
  };

  function handleNewClick() {
    const newNote = {
      title: addNew.title,
      body: addNew.body,
    };
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
    .then((r) => r.json())
    .then(onAddNote);
  }

   
  return (
    <div className="master-detail-element sidebar">
      <NoteList 
        notes={notes} 
        onShowNote={onShowNote} 
        onChangeNote={handleChange} 
        />
      <button onClick={handleNewClick}>New</button>
    </div>
  );
}

export default Sidebar;
