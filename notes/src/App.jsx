// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NotesList from './NotesList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Notes App</h1>
        <NotesList />
      </div>
    </Provider>
  );
};

export default App;
