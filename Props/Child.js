import React from 'react';

function Comment(props) {
  return (
    <div class='comment'>
      <a class='avatar'>
        <img src={props.image} />
      </a>
      <div class='content'>
        <a class='author'>{props.name}</a>
        <div class='metadata'>
          <span class='date'>{props.time}</span>
        </div>
        <div class='text'>{props.body}</div>
      </div>
    </div>
  );
}

export default Comment;
