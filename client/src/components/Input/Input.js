import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => {
  const messageHandler = (event) => {
    let isMorse = true;
    event.target.value.split('').forEach((symbol) => {
      if (symbol !== '.' && symbol !== '-' && symbol !== ' ') {
        isMorse = false;
      }
    });
    if (isMorse) {
      setMessage(event.target.value);
    }
  };

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(event) => messageHandler(event)}
        onKeyDown={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default Input;
