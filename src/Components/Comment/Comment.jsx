import Avatar from '../Avatar/Avatar';
import { CommentActionsContext } from '../HomePage/HomePage.jsx';
import './Comment.css';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Comment = ({id,userName,loggedUser,comment,date,src,gender,postedBy})=>{
 const {isEdited,setIsEdited,getEditedComment,deleteComment} = useContext(CommentActionsContext);
  const HandleEdit = (id,comment)=>{
    getEditedComment(id,comment);
    if(setIsEdited){
      setIsEdited(true);
    }
  }
    return(
        <div className='Comment' >
            <h6 className="Date">{date}</h6>
             <Avatar src={src} Gender={gender} AvatarInCard={true}/>
            <h4 className="UserName">{userName}</h4>
            <p className="CommentText">{comment}</p>
            <div className="CardBottom">
            <Link to={`/CommentDetails/${id}`} className="ReplyButton">Reply</Link>
            {loggedUser.id === postedBy && <div className="ButtonContainer">
           <button className="CardButton EditButton" onClick={()=>HandleEdit(id,comment)}> <FontAwesomeIcon icon={faPen} /></button>
           <button className="CardButton DeleteButton"  onClick={() => deleteComment(id)}> <FontAwesomeIcon icon={faTrash} /></button> 
            </div>}
            </div>
          </div>
    )
}
export default Comment; 