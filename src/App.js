import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import Counter from './Counter';
import store from './store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
