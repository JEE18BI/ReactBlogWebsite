import {useState} from 'react';
import './Counter.css';
const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div className="CounterContainer">
      <h2>Count : {count}</h2>

      <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Counter
