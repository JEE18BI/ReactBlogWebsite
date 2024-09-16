import { useEffect,useState,useContext } from 'react';
import { ApiContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen , faTrash  } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../Avatar/Avatar';
import { ToastContainer, toast } from 'react-toastify';
import './Reply.css';
const Reply = ({reply,loggedInUser,comment,setReplies,setComment}) => {
    const [user,setUser] = useState("");
    const [replyInput,setReplyInput] = useState(reply.reply);
    const [inputForm,setInputForm] = useState(false);
    const {baseUrl} = useContext(ApiContext);
    useEffect(()=>{
        fetch(`${baseUrl}/users/get/${reply.postedBy}`)
        .then((data)=> data.json())
        .then((fetchedData)=> {
          setUser(fetchedData)
        }).catch((error) => console.error('Error fetching data:', error));
      },[]) 
    if (!reply || !reply.postedBy) {
        return <div>Loading...</div>;
      }     
      const EditReply = ()=>{
        setInputForm(true);
      }
    const SaveEditReply = (replyId,commentId)=>{
  if(commentId && replyId){
    if(replyInput){
         
            const updatedReply= {
              reply: replyInput
            };
              fetch(`${baseUrl}/comments/${commentId}/replies/edit/${replyId}`, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json'    
                },
                body: JSON.stringify(updatedReply)
            })
            .then(response => {
              if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
              }
              return response.json();
            })
            .then(data => {
              setReplies(prevReplies =>
                prevReplies.map(reply =>
                  reply.id === replyId
                  ? { ...reply, reply: data.reply,date:data.date } 
                  : reply
                )
              );
          })
          setInputForm(false);
          }
          else{
            toast.warn("Please Fill Reply Field");
          }
         
        }
        
    }
    const DeleteReply = async(replyId)=>{
      await fetch(`${baseUrl}/comments/${comment.id}/replies/delete/${replyId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            console.log('Success: Reply deleted');
        } else {
            return response.text().then(text => {
                console.error('Error: Failed to delete reply. Status:', text,response.status);
            });
        }
    })
    .catch(error => console.error('Fetch Error:', error));
    setReplies(prevState => (prevState.filter(el => (el.id !== replyId))))
    }
    const ReplyChangeHandler = (e)=>{
      setReplyInput(e.target.value);
    }
  return (
    <>
     <ToastContainer/>
     <div className="ReplyContainer">  
      <div className="ReplySubContainer">
        <div className="ReplyHeader">
          <div>
          <Avatar src={user.src}/>
          <h4 className="ReplyUserName">{user.userName}</h4>
          </div>
          <h6>{reply.date}</h6>
        </div>
        <div className="ReplyBody">
      {!inputForm && <h6 className="ReplyText">{reply.reply}</h6>}
      {inputForm && <input className="ReplyInput" value={replyInput} onChange={ReplyChangeHandler}></input>}
        </div>
      </div>
      {(reply.postedBy === loggedInUser.id) && !inputForm &&
      <div className="ButtonContainer">
      <button className="CardButton EditButton" onClick={()=>EditReply()}> <FontAwesomeIcon icon={faPen} /></button>
      <button className="CardButton DeleteButton" onClick={()=>DeleteReply(reply.id)}> <FontAwesomeIcon icon={faTrash} /></button> 
       </div>
      }
      {(reply.postedBy === loggedInUser.id) && inputForm &&
      <div className="SaveButtonContainer">
      <button className="SaveButton" onClick={()=>SaveEditReply(reply.id,comment.id)}>Edit</button> 
      </div>}
    </div>
    </>
  )
}

export default Reply
