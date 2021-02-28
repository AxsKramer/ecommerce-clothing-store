import React from 'react';
import '../Message/Message.scss';

const Message = ({children, isError}) => {
  return (
    <p className={`${isError ? 'error' : 'correct'} message`}>
      {children}
    </p>
  )
}

export default Message
