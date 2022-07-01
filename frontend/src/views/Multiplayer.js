import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Table from "../components/Table.js";
import { checkWin } from "../logic/Game.js";

const socket = io("http://localhost:3002");

const Multiplayer = () => {
    const [table, setTable] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    const [win, setWin] = useState(false);
    const [turn, setTurn] = useState(true); //true is circle's turn, false is cross's turn

    useEffect(() => {
        socket.on("connect", () => console.log("connected"));
        socket.on("recieve", (data) => {
            setTable(data.table);
            setWin(data.win);
            setTurn(data.turn);
        });

        return () => {
            socket.off("connect");
            socket.off("recieve");
        };
    }, []);

    const handleTurn = (row, col) => {
        let tempTable = table;
        if (
            !win &&
            tempTable[row][col] !== "o" &&
            tempTable[row][col] !== "x"
        ) {
            turn ? (tempTable[row][col] = "o") : (tempTable[row][col] = "x");
            setTable(tempTable);
            let tempTurn = !turn;
            setTurn(tempTurn);
            let tempWin = checkWin(table);
            setWin(tempWin);
            socket.emit("move", {
                win: tempWin,
                table: tempTable,
                turn: tempTurn,
            });
        }
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
            <Table table={table} onClick={handleTurn} />
        </div>
    );
};
export default Multiplayer;
