// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './Componets/store';
import NoteList from './Componets/NoteList';
import AddNote from './Componets/AddNote';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className='NOTEApp'>Notes App</h1>
        <h2 className='Notes'>Notes</h2>
        <AddNote />
        <NoteList />
      </div>
    </Provider>
  );
}

export default App;
