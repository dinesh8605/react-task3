
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from './noteActions';

const AddNote = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (input) {
      dispatch(addNote(input));
      setInput('');
    }
  };

  return (
    <div>
      <input className='Input'
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Take a notes...'
      />
      <button className='add' onClick={handleAddNote}>Add Note</button>
      <p className='MYnote'>My Notes</p>
      <p className='viewed'>Recently Viewed</p>
    </div>
  );
};

export default AddNote;
///////////////////