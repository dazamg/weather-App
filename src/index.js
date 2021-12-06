import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { BrowserRouter as Router} from 'react-router-dom'

// Redux
import weatherReducer from './redux/reducers/weather';
import { createStore, applyMiddleware } from 'redux';
import {  Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas'


//store 
const sagaMiddleware = createSagaMiddleware();
const store = createStore( weatherReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Provider store={store}> 
          <App />
        </Provider> 
      </Router> 
    </React.StrictMode>,
  document.getElementById('root')
);


