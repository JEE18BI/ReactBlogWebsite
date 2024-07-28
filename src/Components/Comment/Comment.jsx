import Avatar from '../Avatar/Avatar.jsx';
import './Comment.css';
const Comment = ({UserName,Comment,Date})=>{
    return(
        <div className='Comment' >
             <Avatar />
            <h4 className="UserName">{UserName}</h4>
            <p className="CommentText">{Comment}</p>
            <h6 className="Date">{Date}</h6>
          </div>
    )
}
export default Comment;