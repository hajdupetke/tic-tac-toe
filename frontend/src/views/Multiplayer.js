import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Table from "../components/Table.js";

const Multiplayer = () => {
    const [table, setTable] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    const [win, setWin] = useState(false);
    const [turn, setTurn] = useState(true); //true is circle's turn, false is cross's turn

    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io("http://localhost:3002");
        newSocket.on("connect", (socket) => {
            console.log("socket connected", socket);
        });

        setSocket(newSocket);
        return () => newSocket.close();
    }, []);

    const moveHandler = () => {
        socket.on("opponent_move", (data) => {
            setTable(data.table);
            setWin(data.win);
            setTurn(data.turn);
        });
    };

    const handleWin = () => {
        setWin(true);
    };

    const handleTurn = () => {
        setTurn(!turn);
    };

    return (
        <div className="bg-charcoal w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="mb-14 text-gainsboro text-4xl font-bold flex-none">
                Tic-Tac-Toe
            </h1>
            {!win ? (
                <p className="mb-12 text-gainsboro text-2xl flex-none">
                    {turn ? "O's" : "X's"} turn
                </p>
            ) : (
                <div>
                    <p className="mb-2 px-5 py-3 text-gainsboro text-2xl flex-none">
                        {turn ? "X" : "O"} wins
                    </p>
                </div>
            )}
            <Table
                table={table}
                win={win}
                setWin={handleWin}
                turn={turn}
                setTurn={handleTurn}
            />
        </div>
    );
};
export default Multiplayer;
