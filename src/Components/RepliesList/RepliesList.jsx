import React from 'react';
import placeholderImg from '../../Images/Placeholder.svg';

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
        <div key={reply.id} className="Reply">
          <p>{reply.reply}</p>
          <small>{reply.date}</small>
        </div>
      ))}
    </div>
  );
};

export default RepliesList;
