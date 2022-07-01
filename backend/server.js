const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer();
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("a user connected " + socket.id);
    socket.on("move", (data) => {
        console.log(data);
        socket.broadcast.emit("recieve", data);
    });
});

server.listen(3002, () => {
    console.log("listening on 3002");
});
