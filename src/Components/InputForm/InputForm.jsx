import  {useRef}  from 'react';
import './InputForm.css';
const InputForm = ({setComment,setFilterData,user,setInputPopup}) => {

  let refComment =useRef(); 
  const refHandler =()=>{
        if(refComment.current.value!=="" ){
            const today = new Date();
            const options = { year: 'numeric', month: 'short', day: '2-digit' };
            const formattedDate = today.toLocaleDateString('en-US', options);
            const dateString = formattedDate.toString();   
            const newComment=  {
                id:Date.now(),
                comment:refComment.current.value,
                userName:user.userName,
                date:dateString,
                src:user.src,
                gender:user.gender,
                postedBy:user.id
              }
              fetch('http://localhost:3004/comments/add', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'    
                },
                body: JSON.stringify(newComment)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
              setComment(prevsState=>[...prevsState,newComment]);
              if(newComment.comment.toLowerCase().includes(document.getElementById("SearchBarInput").value.toLowerCase()))
              setFilterData(prevsState=>[...prevsState,newComment]);
            else
            setFilterData(setFilterData);
            refComment.current.value="";
            setInputPopup(false);
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
        <a onClick={()=>setInputPopup(false)}>Discard</a>
    </div>
  )
}

export default InputForm
