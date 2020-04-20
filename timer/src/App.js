import React, { useState, useEffect } from 'react';
import './App.css';

function Hello() {
  const currentTime = () => (new Date()).toLocaleString()
  const [timer,updateTimer] = useState(currentTime);
  useEffect(() => {
    const timerId = setTimeout(() => {
      updateTimer(currentTime);
    }, 1000);
    return () => clearTimeout(timerId);

});
  return ( <div>
      Hello React !!!
      <pre> {timer} </pre>
    </div>

  );
}

export default Hello;
