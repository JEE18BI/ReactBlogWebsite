import {useState} from 'react';
import './Counter.css';
const Counter = () => {
    const [count,setCount]=useState(0);
    const counterHandler=()=>setCount(count+1);
  return (
    <div className="CounterContainer">
      <h2>Count : {count}</h2>

      <button onClick={counterHandler}>Increment</button>
    </div>
  )
}

export default Counter
