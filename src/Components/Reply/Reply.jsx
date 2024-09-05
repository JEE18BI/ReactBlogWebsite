import { useEffect,useState,useContext } from 'react';
import { ApiContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../Avatar/Avatar';
import '../Comment/Comment.css';
import './Reply.css'
const Reply = ({reply,loggedInUser,comment,setReplies,setComment}) => {
    const [user,setUser] = useState("");
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
    function ComingSoon(){
      alert("Coming Soon");
    }
    const DeleteReply = (replyId)=>{
      fetch(`${baseUrl}/comments/${comment.id}/replies/delete/${replyId}`, {
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
  return (
    <>
    <div className="ReplyContainer">  
      <div className="ReplySubContainer">
        <div className="ReplyHeader">
          <Avatar src={user.src}/>
          <div className="ReplySubHeader">

      <h6>{user.userName}</h6>
      <h6>{reply.date}</h6>
          </div>
        </div>
        <div className="ReplyBody">
      <h6 className="ReplyText">{reply.reply}</h6>
        </div>
      </div>
      {(reply.postedBy === loggedInUser.id) && 
      <div className="ButtonContainer">
      <button className="CardButton EditButton" onClick={ComingSoon}> <FontAwesomeIcon icon={faPen} /></button>
      <button className="CardButton DeleteButton" onClick={()=>DeleteReply(reply.id)}> <FontAwesomeIcon icon={faTrash} /></button> 
       </div>
      }
    </div>
    </>
  )
}

export default Reply
