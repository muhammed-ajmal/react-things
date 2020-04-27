import React,{ useState } from 'react';
import './App.css';

const StarDisplay = props => {
  return(
    <>
      {utils.range(1,props.count).map(starId => <div key={starId} className="star" />)}
    </>
  );
}

const PlayNumber = props => {


  /*const NumStatus = (number) => {
    if(!availableNums.includes(number)){
      return 'used'
    }
    if(candidateNums.includes(number)){
      return candidateAreWrong ? 'wrong' : 'candidate';
    }
    return 'available'
  }
  */

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
const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1,9));
  const [availableNums, setAvailableNums] = useState(utils.range(1,9));
  const [candidateNums, setCandidateNums] = useState([])
  const candidateAreWrong = utils.sum(candidateNums) > stars;
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

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarDisplay count={stars}/>
        </div>
        <div className="right">
          <PlayNumber count={stars} CheckStatus={NumStatus} onClick={onNumberClick}/>
        </div>
      </div>
      <div className="timer"> Time Remaining : 10 </div>
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
