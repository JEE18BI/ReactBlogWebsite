
import  {useRef}  from 'react';
import './InputForm.css';
import img1 from '../../Images/AlyHany.jpg';
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
                UserName:"Aly Hany",
                Date:dateString,
                src:img1

               
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
     <input id="Comment" ref={refComment} maxLength={200} placeholder="Write Your Comment Here , max 200 characters" />
     <button className="FormButton" onClick={refHandler}>Add</button>
     
    </div>
  )
}

export default InputForm
