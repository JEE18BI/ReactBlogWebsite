import Comment from '../Comment/Comment.jsx';
import './CommentList.css';
const CommentList = ({data , deleteFunction}) => {
    const newData= data.map((comment)=>(
        <Comment key={comment.id} {...comment} deleteFunction={deleteFunction}/>
       ))
       console.log(newData);
  return (
    <>
      {newData}
    </>
  )
}

export default CommentList
