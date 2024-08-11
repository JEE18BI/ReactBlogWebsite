
import  {useRef}  from 'react';
import './InputForm.css';
import img1 from '../../Images/AlyHany.jpg';
const InputForm = ({setComment,setFilterData,comments}) => {
  console.log("render");
    let refComment =useRef();
    const refHandler =()=>{
        if(refComment.current.value!=="" ){
            const today = new Date();
            const options = { year: 'numeric', month: 'short', day: '2-digit' };
            const formattedDate = today.toLocaleDateString('en-US', options);
            const dateString = formattedDate.toString();
            const newComment=  {
                id:Date.now(),
                Comment:refComment.current.value,
                UserName:"Aly Hany",
                Date:dateString,
                src:img1

               
              }
              setComment(prevsState=>[...prevsState,newComment]);
              if(newComment.Comment.toLowerCase().includes(document.getElementById("SearchBarInput").value.toLowerCase()))
              setFilterData(prevsState=>[...prevsState,newComment]);
            else
            setFilterData(setFilterData);
        }
        else{
            alert("Please Fill All The Fields");
        }
    }
  return (
    <div className="AddCommentForm">
        <label htmlFor="Comment">Add New Comment</label>
     <input id="Comment" ref={refComment} maxLength={200}/>
     <button className="FormButton" onClick={refHandler}>Add</button>
     
    </div>
  )
}

export default InputForm
