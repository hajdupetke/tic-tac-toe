import { useState } from "react";
import { Link } from "react-router-dom";
import { socket } from "../logic/Socket";

const Lobby = () => {
    const [roomId, setRoomId] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setRoomId(e.target.value);
    };

    return (
        <div className="bg-charcoal w-screen h-screen flex flex-col items-center justify-center">
            <input
                type="text"
                placeholder="Enter room code"
                onChange={handleChange}
                className="mb-28 text-5xl font-bold flex-none"
            ></input>
            <Link
                to={"/multi/" + roomId}
                className="mb-12 rounded-full bg-red px-5 py-3 hover:bg-hover text-gainsboro shadow-2xl"
            >
                Create or join room
            </Link>
        </div>
    );
};

export default Lobby;
