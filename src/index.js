import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index'

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store = {store}>
    <Game />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
