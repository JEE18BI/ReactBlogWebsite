import Comment from '../Comment/Comment.jsx';
import placeholderImg from '../../Images/Placeholder.svg';
import './CommentList.css';
const CommentList = ({data , deleteFunction,loggedUser}) => {
  if(data.length===0){
    console.log("zero") 
 return (
   <div className="PlaceholderDiv">
 <img src={placeholderImg} className="PlaceholderImage" alt="Placeholder image"/>
 <h5>No Comments To Show</h5>
  </div>
 )
  }
    const newData= data.map((comment)=>(
        <Comment key={comment.id} {...comment} deleteFunction={deleteFunction} loggedUser={loggedUser}/>
       ))
       console.log(newData);
      
  return (
    <div className="CommentList">
    {newData}
    </div>
  )
}

export default CommentList
