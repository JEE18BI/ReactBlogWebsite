import Comment from '../Comment/Comment.jsx';
import './CommentList.css';
const CommentList = ({data , deleteFunction}) => {
  if(data.length===0){
 return (
  <>
  <h5>No Comments to show</h5>
  </>
 )
  }
    const newData= data.map((comment)=>(
        <Comment key={comment.id} {...comment} deleteFunction={deleteFunction}/>
       ))
       console.log(newData);
      
  return (
    <div className="CommentList">
    {newData}
    </div>
  )
}

export default CommentList
