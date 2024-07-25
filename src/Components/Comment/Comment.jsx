import Img from '../../Images/img1.jpg';
import './Comment.css';
const Comment = ()=>{
    return(
        <div className='Comment'>
            <h2 className="CommentText">This is Comment Text</h2>
            
        <img className="CommentImage" src={Img} alt="imge1"/>
          </div>
    )
}
export default Comment;