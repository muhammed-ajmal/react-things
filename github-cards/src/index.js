import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';


//import AppF from './App/Using-Function';
//import AppFP from './App/Using-Func-Dir-Props';
//import AppAF from './App/Using-Arrow-Func';
//import AppC from './App/Using-Class';
//import AppICSS from './App/Using-InlineCSS';
//import AppDwoF from './App/Final-App-Design-without-Form';

import App from './App/App';
ReactDOM.render(
  <React.StrictMode>
    <App title="Github Profile Cards"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
