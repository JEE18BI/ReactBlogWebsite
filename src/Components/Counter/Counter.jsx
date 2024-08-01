import {useState} from 'react';
import './Counter.css';
const Counter = () => {
    const [count,setCount]=useState(0);
    const counterIncrementHandler=()=>setCount(count+1);
    const counterDecrementHandler=()=>setCount(count-1);
  return (
    <div className="CounterContainer">
      <h2>Counter : {count}</h2>

      <button className="IncrementButton" onClick={counterIncrementHandler}>Increment</button>
      <button className="DecrementButton" onClick={counterDecrementHandler}>Decrement</button>
    </div>
  )
}

export default Counter
