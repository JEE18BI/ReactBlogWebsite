import Avatar from '../Avatar/Avatar.jsx';
import './Comment.css';

const Comment = ({id,UserName,Comment,Date,src,Gender,deleteFunction})=>{
  
    return(
        <div className='Comment' >
            <h6 className="Date">{Date}</h6>
             <Avatar src={src} Gender={Gender}/>
            <h4 className="UserName">{UserName}</h4>
            <p className="CommentText">{Comment}</p>
            <div className="ButtonContainer">
            <button className="DeleteButton" onClick={() => deleteFunction(id)}>Delete</button>
            </div>
          </div>
    )
}
export default Comment; 