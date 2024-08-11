import Comment from '../Comment/Comment.jsx';
import './CommentList.css';
const CommentList = ({data , deleteFunction}) => {
  if(data.length===0){
    console.log("zero") 
 return (
   <div className="CommentList">
 <h3>No Data To Show</h3>
  </div>
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
