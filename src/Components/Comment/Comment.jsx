import Avatar from '../Avatar/Avatar.jsx';
import './Comment.css';
import img1 from '../../Images/AlyHany.jpg';
const Comment = ({UserName,Comment,Date})=>{
    return(
        <div className='Comment' >
             <Avatar src={img1}/>
            <h4 className="UserName">{UserName}</h4>
            <p className="CommentText">{Comment}</p>
            <h6 className="Date">{Date}</h6>
          </div>
    )
}
export default Comment;