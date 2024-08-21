import Avatar from '../Avatar/Avatar';
import { CommentEditedContext } from '../../App';
import './Comment.css';
import { useContext } from 'react';

const Comment = ({id,userName,loggedUser,comment,date,src,gender,deleteFunction,postedBy})=>{
 const {isEdited,setIsEdited} = useContext(CommentEditedContext);
  const HandleEdit = ()=>{
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
            <div className="ButtonContainer">
            
            {loggedUser.id === postedBy && <div className="CardButtonContainer">

          <button className="CardButton" onClick={HandleEdit}>Edit</button>  
          <button className="CardButton" id="DeleteButton" onClick={() => deleteFunction(id)}> Delete</button>  
          
            </div> }
            </div>
          </div>
    )
}
export default Comment; 