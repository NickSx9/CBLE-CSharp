import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './global/globalVar.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';

const rootElement = document.getElementById('root');
const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  rootElement);
registerServiceWorker();