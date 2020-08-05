import React from 'react';
import Main from '../src/rutas/main/main';
import {Provider} from 'react-redux';
import configureStore from './configureStore';


let store = configureStore();

function App() {
  return (
      <Provider store={store}>
        <Main/>
      </Provider>
  );
}

export default App;
