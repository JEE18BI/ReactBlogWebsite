import Avatar from '../Avatar/Avatar.jsx';
import './Comment.css';
const Comment = ()=>{
    return(
        <div className='Comment' >
             <Avatar/>
            <h4 className="UserName">Aly Hany</h4>
            <p className="CommentText">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <h6 className="Date">26 July 2024</h6>
          </div>
    )
}
export default Comment;