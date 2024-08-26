import Avatar from '../Avatar/Avatar';
import { CommentEditedContext } from '../HomePage/HomePage.jsx';
import './Comment.css';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const Comment = ({id,userName,loggedUser,comment,date,src,gender,deleteFunction,postedBy})=>{
 const {isEdited,setIsEdited,getEditedComment} = useContext(CommentEditedContext);
  const HandleEdit = (id)=>{
    getEditedComment(id,comment);
    if(setIsEdited){
      setIsEdited(true);
    }
  }
    return(
        <div className='Comment' >
            <h6 className="Date">{date}</h6>
             <Avatar src={src} Gender={gender}/>
            <h4 className="UserName">{userName}</h4>
            <p className="CommentText">{comment}</p>
            <div className="CardBottom">
            <a className="ReplyButton">Reply</a>
            {loggedUser.id === postedBy && <div className="ButtonContainer">
           <button className="CardButton EditButton" onClick={()=>HandleEdit(id,comment)}> <FontAwesomeIcon icon={faPen} /></button>
           <button className="CardButton DeleteButton"  onClick={() => deleteFunction(id)}> <FontAwesomeIcon icon={faTrash} /></button> 
            </div>}
            </div>
          </div>
    )
}
export default Comment; 