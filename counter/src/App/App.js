import React, {useState} from 'react';
// /import logo from '../logo.svg';
import './App.css';

function Button(props){
  const handleOnclick = () => props.onClick(props.increment)
  return <button onClick={handleOnclick}>{props.increment}</button>;
}
function App() {
  const getRandomInt= (x) => Math.floor(Math.random()*Math.floor(x));
  const [counter, setCounter] = useState(getRandomInt(100));
  const [random, setRandom] = useState(getRandomInt(1000));
  const randomfn = (x) => { const y= getRandomInt(123456789);
    setRandom(y);setCounter(y)};
  const incrCounter = (increment) => setCounter(counter+increment)
  const incrvalues = [1,2,3,4,5,6,7,8,9,10,100,1000]
  return (<><div>
    <button onClick={randomfn}>random {random}</button>
    {incrvalues.map(x => <Button increment={x} onClick={incrCounter} key={x}/>)}
</div>
    <input
      type="text"
      placeholder="input number"
      value = {counter}
      onChange = { (event) => isNaN(event.target.value) ? setCounter(0):setCounter(event.target.value)}
    />
    <button onClick ={()=> {setCounter(0);setRandom(0)}}> reset</button>
    <div>
      {incrvalues.map(x => <Button increment={-x} onClick={incrCounter} key={x}/>)}
  </div>
    </>

  );
}
export default App;
