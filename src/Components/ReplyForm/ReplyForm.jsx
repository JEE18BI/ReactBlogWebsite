import { useState ,useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../../App';
import './ReplyForm.css';
const ReplyForm = () => {
    const [replyInput,setReplyInput] = useState("");
    const {baseUrl,user} = useContext(ApiContext);
    const params = useParams();
    const commentId = params.id;
    const AddReply = async()=>{
     if(!replyInput){
        toast.warn("Please Fill Reply Field");
     }
     else{
        const now = new Date();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const formattedDate =`${now.getHours().toString().padStart(2, '0')} : ${now.getMinutes().toString().padStart(2, '0')} , ${now.getDate().toString().padStart(2, '0')} ${monthNames[now.getMonth()].toString().padStart(2, '0')} ${now.getFullYear().toString().slice(-2)}`;
        const dateString = formattedDate.toString();
        let newReply=  {
            id:0,
            reply:replyInput,
            date:dateString,
            postedBy:user.id
        }
        console.log("comment id " +commentId)
        await fetch(`${baseUrl}/comments/replies/add/${commentId}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'    
            },
            body: JSON.stringify(newReply)
     })
     .then(response =>response.json())
     .then(data => {
         newReply.id = data.id;
         console.log('Success:', data);
     })
     .catch(error => {
         console.error('Error:', error);
     });
    }
}
    const ReplyInputHandler = (e)=>{
        setReplyInput(e.target.value);
    }
  return (
    <>
    <ToastContainer/>
      <label>Add Reply</label>
      <input onChange={ReplyInputHandler}></input>
      <button className="AddReplyButton" onClick={AddReply}>Add</button>
    </>
  )
}

export default ReplyForm
