import {useState} from 'react';
import placeholderImg from '../../Images/Placeholder.svg';
import Reply from '../Reply/Reply';

const RepliesList = ({ comment,setComment , loggedInUser}) => {
  const [replies,setReplies] = useState(comment.replies);

  if (replies.length === 0) {
    return (
      <div className="PlaceholderDiv">
        <img src={placeholderImg} className="PlaceholderImage" alt="Placeholder image" />
        <h3>No Replies To Show</h3>
      </div>
    );
  }

  return (
    <div className="RepliesList">
      {replies.map((reply) => (
        <Reply key={reply.id} reply={reply} loggedInUser={loggedInUser} comment={comment} setReplies={setReplies} setComment={setComment}/>
      ))}
    </div>
  );
};

export default RepliesList;
