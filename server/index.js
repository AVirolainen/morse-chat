const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);

    const error = true;

    // if (error) {
    //   callback({ error: 'error' });
    // }
  });

  socket.on('disconnect', () => {
    console.log('User had left');
  });
});

server.listen(PORT, () => console.log(`server started on port ${PORT}`));
