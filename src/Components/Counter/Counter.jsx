import {useState} from 'react';
import './Counter.css';
const Counter = () => {
    const [count,setCount]=useState(0);
    const counterIncrementHandler=()=>setCount(count+1);
    const counterDecrementHandler=()=>setCount(count-1);
  return (
    <div className="CounterContainer">
      <h2>Count : {count}</h2>

      <button onClick={counterIncrementHandler}>Increment</button>
      <button onClick={counterDecrementHandler}>Decrement</button>
    </div>
  )
}

export default Counter
