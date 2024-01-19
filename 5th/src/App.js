import React from 'react';
import Todo from './Todo';
import { Provider } from 'react-redux';
import store from './store.js';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Todo />
        {/* Hello */}
      </div>
    </Provider>
  );
}

export default App;