import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { ApiContext } from '../../App';
import Avatar from '../Avatar/Avatar';
import ReplyForm from '../ReplyForm/ReplyForm';
import RepliesList from '../RepliesList/RepliesList';
import '../Comment/Comment.css'
import './CardDetails.css' ;
const CardDetails = ({loggedInUser}) => {
    const params = useParams();
    const id = params.id;
    const [comment,setComment] = useState("");
    const [user,setUser] = useState("");
    const [replies,setReplies] = useState("");
    const [addReplyForm,setAddReplyForm] = useState(false);
    const {baseUrl} = useContext(ApiContext);
       useEffect(()=>{
            fetch(`${baseUrl}/Comments/get/${id}`)
            .then((data)=> data.json())
            .then((fetchedData)=> {
              setComment(fetchedData)
            }).catch((error) => console.error('Error fetching data:', error));
          },[]) 
          useEffect(()=>{
            if(comment.postedBy){
              fetch(`${baseUrl}/Users/get/${comment.postedBy}`)
              .then((data)=> data.json())
              .then((fetchedData)=> {
                setUser(fetchedData)
              }).catch((error) => console.error('Error fetching data:', error));
            }
          },[comment]) 
        
  if (!comment || !user) {
    return <div>Loading...</div>;
  }   
  const AddReplyToggle = ()=>{
    setAddReplyForm(true);
  }  
  return (
   <>
   <div className="CardDetails">
    <div className="CommentCard">
     <div className="CardHeader">
     <div className="CardSubHeader">
     <Avatar src={user.src} Gender={user.gender} CardDetails={true}/>
     <h4 className="UserName">{comment.userName}</h4>
     </div>
     <h4 className="Date">{comment.date}</h4>
     </div>
     <div className="CardBody">
     <h6 className="CommentText">{comment.comment}</h6>
     </div>
     </div>
     <div className="Replies">
      <h4>Replies</h4>
     {!addReplyForm &&<button className="AddReplyButton" onClick={AddReplyToggle}>Add Reply</button>}
     {addReplyForm && <ReplyForm  loggedInUser={loggedInUser} commentId={id} setReplies={setReplies}/>}
     <RepliesList comment={comment} setComment={setComment} loggedInUser={loggedInUser}/>
     </div>
   </div>
   </>
  )
}

export default CardDetails
