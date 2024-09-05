import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { ApiContext } from '../../App';
import Avatar from '../Avatar/Avatar';
import RepliesList from '../RepliesList/RepliesList';
import '../Comment/Comment.css'
import './CardDetails.css' ;
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
const CardDetails = ({loggedInUser}) => {
    const params = useParams();
    const id = params.id;
    const [comment,setComment] = useState("");
    const [user,setUser] = useState("");
    const {baseUrl} = useContext(ApiContext);
        useEffect(()=>{
            fetch(`${baseUrl}/Comments/get/${id}`)
            .then((data)=> data.json())
            .then((fetchedData)=> {
              setComment(fetchedData)
            }).catch((error) => console.error('Error fetching data:', error));
          },[]) 

        useEffect(()=>{
          fetch(`${baseUrl}/Users/get/${comment.postedBy}`)
          .then((data)=> data.json())
          .then((fetchedData)=> {
            setUser(fetchedData)
          }).catch((error) => console.error('Error fetching data:', error));
        },[user]) 
  if (!comment || !user) {
    return <div>Loading...</div>;
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
     <RepliesList comment={comment} setComment={setComment} loggedInUser={loggedInUser}/>
     </div>
   </div>
   </>
  )
}

export default CardDetails
