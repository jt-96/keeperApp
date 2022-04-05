import React, { useState } from 'react';
import CreateArea from './components/createArea/CreateArea';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Note from './components/note/Note';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(index){

    setNotes((prevValue) => {
      return prevValue.filter((item, id) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote}/>
      {
        notes.map((note, index) => (

          <Note key={index} title={note.title} content={note.content} onDelete={deleteNote} id={index}/>
        ))
      }
      <Footer />
    </div>
  );
}

export default App;
