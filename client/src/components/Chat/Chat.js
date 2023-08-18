import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

import Contants from '../../constants/constants';

let socket;

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const location = useLocation();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(Contants.ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {});

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [location.search]);

  return <h1>Chat</h1>;
};

export default Chat;
