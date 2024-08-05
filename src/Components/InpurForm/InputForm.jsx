
import  {useRef}  from 'react';
const InputForm = () => {
    const refInput=useRef();
    const refHandler =()=>{
        console.log(refInput.current.value);
        console.log(refInput.current);
    }
  return (
    <div>
     <input id="refExample" ref={refInput} onChange={refHandler}/>
    </div>
  )
}

export default InputForm
