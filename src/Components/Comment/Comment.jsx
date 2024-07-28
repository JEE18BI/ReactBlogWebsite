import Avatar from '../Avatar/Avatar.jsx';
import './Comment.css';

const Comment = ({UserName,Comment,Date,src})=>{
  
    return(
        <div className='Comment' >
             <Avatar src={src}/>
            <h4 className="UserName">{UserName}</h4>
            <p className="CommentText">{Comment}</p>
            <h6 className="Date">{Date}</h6>
          </div>
    )
}
export default Comment;