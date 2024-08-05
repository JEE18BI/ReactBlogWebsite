
import  {useRef}  from 'react';
import './InputForm.css';
const InputForm = ({setComment}) => {
    const refComment =useRef();
    const refHandler =()=>{
        if(refComment.current.value!=="" ){
            const today = new Date();
            const options = { year: 'numeric', month: 'short', day: '2-digit' };
            const formattedDate = today.toLocaleDateString('en-US', options);
            const dateString = formattedDate.toString();
            const newComment=  {
                id: 5,
                Comment:refComment.current.value,
                UserName:"Lorem ispum",
                Date:dateString,
               
              }
            setComment(prevsState=>[...prevsState,newComment]);
            refComment.current.value="";
        }
        else{
            alert("Please Fill All The Fields");
        }
    }
  return (
    <div className="AddCommentForm">
        <label htmlFor="Comment">Add New Comment</label>
     <input id="Comment" ref={refComment}/>
     <button className="FormButton" onClick={refHandler}>Add</button>
     
    </div>
  )
}

export default InputForm
