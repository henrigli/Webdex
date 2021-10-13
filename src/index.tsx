import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import SearchField from './SearchField'
import { ChakraProvider } from '@chakra-ui/react'
import PokemonContainer from './PokemonContainer';

ReactDOM.render(
  <ChakraProvider>
    <Provider store={store}>
      <PokemonContainer />
    </Provider>
  </ChakraProvider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
