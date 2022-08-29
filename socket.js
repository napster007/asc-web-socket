const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
});


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("broadcast",(res) =>{
      console.log('-----broadcast');
      socket.broadcast.emit("broadcast", "test");
  })
  
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});