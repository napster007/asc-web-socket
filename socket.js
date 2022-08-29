const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
require("dotenv").config();
const io = require("socket.io")(server, {
    cors: {
        origin: ["http://asconlineapp.com/", "http://18.136.32.45:4200"],
        methods: ["GET", "POST"],
    },
});

const port = process.env.PORT;

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("broadcast", (res) => {
        console.log("-----broadcast");
        socket.broadcast.emit("broadcast", "test");
    });
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
