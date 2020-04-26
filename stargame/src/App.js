import React from 'react';
import './App.css';


const StarMatch = () => {
  let numberOfKeysOrStars = utils.range(1,9)
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {numberOfKeysOrStars.map(x => <div key = {x} className="star" />)}
        </div>
        <div className="right">
          {numberOfKeysOrStars.map(x => <button key={x} className="number">{x}</button>)}
        </div>
      </div>
      <div className="timer"> Time Remaining : 10 </div>
    </div>
  );
}

const utils = {
  // create an array of numbers between min and max (edges included)
  range: (min,max) => Array.from({length: max - min + 1},(_,i) => min + i),
}

function App() {
  return (
    <div className="App">
      <StarMatch />
    </div>
  );
}

export default App;
