// NotesList.js
import React from 'react';
import { connect } from 'react-redux';
import { addNote } from './notesActions';

const NotesList = ({ notes, addNote }) => {
  const handleAddNote = () => {
    const newNote = { id: Date.now(), text: 'New Note' }; // Replace with user input
    addNote(newNote);
  };

  return (
    <div>
      <button onClick={handleAddNote}>Add Note</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps, { addNote })(NotesList);
