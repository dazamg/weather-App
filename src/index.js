import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'semantic-ui-css/semantic.min.css'
// Redux
import weatherReducer from './redux/reducers/weather';
import { createStore, applyMiddleware } from 'redux';
import {  Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/weather'


//store 
const sagaMiddleware = createSagaMiddleware();
const store = createStore( weatherReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
        <Provider store={store}> 
          <App />
        </Provider> 
    </React.StrictMode>,
  document.getElementById('root')
);


