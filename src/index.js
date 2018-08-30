import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import RouterPage from './components/RouterPage';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

render(
  <Provider store = {store}>
    <RouterPage />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
