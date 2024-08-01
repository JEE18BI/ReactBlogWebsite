import Comment from '../Comment/Comment.jsx';
import './CommentList.css';
const CommentList = ({data}) => {
    const newData= data.map((comment)=>(
        <Comment key={comment.id} {...comment}/>
       ))
       console.log(newData);
  return (
    <>
      {newData}
    </>
  )
}

export default CommentList
