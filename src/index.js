import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Game from './containers/Game';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducer, /* preloadedState, */
  windows.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)



ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
