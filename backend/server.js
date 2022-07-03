const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer();
const { Server } = require("socket.io");
const cors = require("cors");
const e = require("express");

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    socket.on("join", (roomName) => {
        console.log(socket.id + ": " + roomName);
        let rooms = io.sockets.adapter.rooms;
        let room = rooms.get(roomName);
        if (room == undefined) {
            socket.join(roomName);
            socket.emit("joined");
        } else if (room.size == 1) {
            //room.size == 1 when one person is inside the room.
            socket.join(roomName);
            socket.emit("joined");
            console.log(Array.from(room));
            const firstPlayerIndex = Math.random() > 0.5 ? 1 : 0;
            const firstPlayer = Array.from(room)[firstPlayerIndex];
            io.to(roomName).emit("start");
            console.log("Start emitted");
            io.to(room).to(firstPlayer).emit("starter");
            console.log(firstPlayer);
        } else {
            //when there are already two people inside the room.
            socket.emit("full");
        }
    });

    socket.on("move", (data) => {
        io.to(data.room).emit("recieve", data);
    });
});

server.listen(3002, () => {
    console.log("listening on 3002");
});

/*
> Figure out rooms with 2 player max limit in room and joinable via room codes
> Determine who goes first
> Randomly choose who is X or O
*/
