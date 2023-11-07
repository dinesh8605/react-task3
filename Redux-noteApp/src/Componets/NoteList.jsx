
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editNote, deleteNote } from './noteActions';

const NoteList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  return (
    <div className='notesList'>
      {notes.map((note, index) => (
        <div key={index}>
          <p>{note}</p>
          <button onClick={() => dispatch(editNote(note))} >Edit</button>
          <button onClick={() => dispatch(deleteNote(index))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
