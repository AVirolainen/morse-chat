import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  let setNameHandler = (event) => {
    setName(event.target.value);
  };

  let setRoomHandler = (event) => {
    setRoom(event.target.value);
  };

  let linkHandler = (event) => {
    if (!name.trim().length || !room.trim().length) {
      event.preventDefault();
    }
  };

  return (
    <div className="container">
      <div className="innerContainer">
        <h1>Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setNameHandler(event)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoomHandler(event)} />
        </div>
        <Link onClick={(event) => linkHandler(event)} to={`/chat?name=${name}&room=${room}`}>
          <button className="joinButton mt-20">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
