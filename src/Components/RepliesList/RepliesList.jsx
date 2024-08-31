import React from 'react';
import placeholderImg from '../../Images/Placeholder.svg';
import Reply from '../Reply/Reply';

const RepliesList = ({ comment }) => {
  const replies = comment.replies;

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
        <Reply key={reply.id} reply={reply}/>
      ))}
    </div>
  );
};

export default RepliesList;
