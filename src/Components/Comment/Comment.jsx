import Avatar from '../Avatar/Avatar.jsx';
import './Comment.css';
const Comment = ()=>{
    return(
        <div className='Comment' >
            <h2 className="CommentText">This is Comment Text</h2>
             <Avatar/>
          </div>
    )
}
export default Comment;