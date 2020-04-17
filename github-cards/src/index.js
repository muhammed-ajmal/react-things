import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import AppF from './App/Using-Function';
//import AppFP from './App/Using-Func-Dir-Props';
//import AppAF from './App/Using-Arrow-Func';

import AppC from './App/Using-Class';

ReactDOM.render(
  <React.StrictMode>
    <AppC title="Github Profile Cards"/>
  </React.StrictMode>,
  document.getElementById('root')
);

////import * as serviceWorker from './serviceWorker';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
