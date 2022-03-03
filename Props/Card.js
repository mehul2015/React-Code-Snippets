import React from 'react';
import Comment from './Comment';
import { faker } from '@faker-js/faker';

function Card(props) {
  return (
    <div>
      {props.children}
      <button style={{ backgroundColor: 'green' }}>Approve</button>
      <button style={{ backgroundColor: 'red' }}>Reject</button>
    </div>
  );
}

export default Card;
