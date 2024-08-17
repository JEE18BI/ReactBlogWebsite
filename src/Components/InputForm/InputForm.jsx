
import  {useRef}  from 'react';
import './InputForm.css';
const InputForm = ({setComment,setFilterData,user}) => {

console.log(user);
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
                UserName:user.userName,
                Date:dateString,
                src:user.src,
                Gender:user.gender
               
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
              if(newComment.Comment.toLowerCase().includes(document.getElementById("SearchBarInput").value.toLowerCase()))
              setFilterData(prevsState=>[...prevsState,newComment]);
            else
            setFilterData(setFilterData);
            refComment.current.value="";
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
