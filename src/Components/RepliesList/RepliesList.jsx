import {useState , useEffect} from 'react';
import placeholderImg from '../../Images/Placeholder.svg';
import Reply from '../Reply/Reply';
console.log("list rendered")
const RepliesList = ({ comment,setComment ,loggedInUser,commentReplies}) => {
  const [replies,setReplies] = useState(comment.replies);
  const [replyList,setReplyList] = useState("");
  useEffect(()=>{
   const newReplyList = replies.map((reply) => (
      <Reply key={reply.id} reply={reply} loggedInUser={loggedInUser} comment={comment} setReplies={setReplies} setComment={setComment}/>
    ))
    setReplyList(newReplyList);
  },[comment,commentReplies])
  if (replies.length === 0) {
    return (
      <div className="PlaceholderDiv">
        <img src={placeholderImg} className="PlaceholderImage" alt="Placeholder " />
        <h3>No Replies To Show</h3>
      </div>
    );
  }

  return (
    <div className="RepliesList">
     {replyList}
    </div>
  );
};

export default RepliesList;
