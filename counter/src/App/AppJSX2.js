import React, { useState, useEffect } from 'react';
// /import logo from '../logo.svg';
import './App.css';
/*
function Hello() {
  return <div> Hello ! </div>
}
*/
function HelloJSX() {
  const time = () => (new Date).toLocaleTimeString()
  const [timer, updateTimer] = useState(time);
  return (<div>
    Hello react !!!!
    <button onClick = { () => updateTimer(time) }>update time</button>
    <pre> {timer}</pre>
  </div>)
}

export default HelloJSX;
