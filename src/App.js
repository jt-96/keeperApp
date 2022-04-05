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

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote}/>
      {
        notes.map((note, index) => (

          <Note key={index} title={note.title} content={note.content} />
        ))
      }
      <Footer />
    </div>
  );
}

export default App;
