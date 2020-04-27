import React,{ useState, useEffect } from 'react';
import './App.css';

const StarDisplay = props => {
  return(
    <>
      {utils.range(1,props.count).map(starId => <div key={starId} className="star" />)}
    </>
  );
}

const PlayNumber = props => {

  return (
    <>
      {utils.range(1,9).map(number => <button key = {number}
        className="number"
        style = {{backgroundColor: colors[props.CheckStatus(number)]}}
        onClick={() => props.onClick(number,props.CheckStatus(number))}
        >{number}</button>)}
    </>
  );
}

const PlayAgain = props => (
  <div className="game-done">
    <div
    className="message"
    style = {{color: props.gameStatus === 'lost' ? 'red' : 'green'}}
    >
      {props.gameStatus==='lost' ? 'Game Over' : 'Nice'}
    </div>
    <button onClick = {props.onClick}> Play Again</button>
  </div>
);

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1,9));
  const [availableNums, setAvailableNums] = useState(utils.range(1,9));
  const [candidateNums, setCandidateNums] = useState([])
  const [timer, setTimer] = useState(10);

  const candidateAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus = availableNums.length === 0 ? 'won' :  timer === 0 ? 'lost' : 'active';
  const NumStatus = (number) => {
    if(!availableNums.includes(number)){
      return 'used'
    }
    if(candidateNums.includes(number)){
      return candidateAreWrong ? 'wrong' : 'candidate';
    }
    return 'available'
  };

  const onNumberClick = (number, currStatus) => {
    if (currStatus === 'used'){
      return;
    }

    const newCandidateNums = currStatus === 'available' ?
      candidateNums.concat(number) : candidateNums.filter(cn => cn !== number);

    if (utils.sum(newCandidateNums) !== stars ) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(n => ! newCandidateNums.includes(n));
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }

  };

  const resetGame = () => {
    setStars(utils.random(1,9));
    setAvailableNums(utils.range(1,9));
    setCandidateNums([]);
    setTimer(10)
  }

  useEffect( () => {
    if(timer >0){
      const timerId = setTimeout(() => {
        setTimer(timer-1);
      },1000);
    return () => clearTimeout(timerId);
  }
  });

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          { gameStatus === 'active' ?
            <StarDisplay count={stars}/>
          :
             <PlayAgain onClick={resetGame} gameStatus={gameStatus}/>
           }

        </div>
        <div className="right">
          <PlayNumber count={stars} CheckStatus={NumStatus} onClick={onNumberClick}/>
        </div>
      </div>
      <div className="timer"> Time Remaining : {timer} </div>
    </div>
  );
}

const colors = {
  available: 'lightgray',
  used:'lightgreen',
  wrong:'lightcoral',
  candidate:'deepskyblue',
}

const utils = {
  // Sum an array
  sum: arr => arr.reduce((acc,curr) => acc+curr,0),
  // create an array of numbers between min and max (edges included)
  range: (min,max) => Array.from({length: max - min + 1},(_,i) => min + i),
  // pick a random number between min and max (edges included)
  random: (min,max) => min + Math.floor(Math.random() * (max - min + 1)),
  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr,max) => {
    const sets = [[]];
    const sums = [];
    for(let i=0; i< arr.length;i++){
      for(let j=0, len = sets.length; j < len; j++){
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0,sums.length - 1)];
  },
}

function App() {
  return (
    <div className="App">
      <StarMatch />
    </div>
  );
}

export default App;
