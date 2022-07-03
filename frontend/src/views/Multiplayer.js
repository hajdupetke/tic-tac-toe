import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "../components/Table.js";
import { checkWin } from "../logic/Game.js";
import { socket } from "../logic/Socket";

const Multiplayer = () => {
    const [table, setTable] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    const [win, setWin] = useState(false);
    const [turn, setTurn] = useState(true);
    const [first, setFirst] = useState(false);
    const [msg, setMsg] = useState("");
    const [ready, setReady] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected to server!");
        });

        socket.emit("join", id);

        socket.on("joined", () => {
            console.log("user connceted to room.");
            setMsg("Waiting for opponent!");
        });

        socket.on("full", () => {
            setMsg("Room is full");
        });

        socket.on("start", () => {
            console.log("helllo");
            setReady(true);
            setTable([
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
            ]);
            setWin(false);
            setTurn(true);
        });

        socket.on("starter", () => {
            setFirst(true);
        });

        socket.on("recieve", (data) => {
            setTable(data.table);
            setWin(data.win);
            setTurn(data.turn);
        });

        return () => {
            socket.off("joined");
            socket.off("starter");
            socket.off("start");
            socket.off("recieve");
        };
    }, []);

    const handleTurn = (row, col) => {
        let tempTable = table;
        if (
            !win &&
            tempTable[row][col] !== "o" &&
            tempTable[row][col] !== "x" &&
            turn == first
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
                room: id,
            });
        }
    };

    return ready ? (
        <div className="bg-charcoal w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="mb-14 text-gainsboro text-4xl font-bold flex-none">
                Tic-Tac-Toe
            </h1>
            {!win ? (
                <p className="mb-12 text-gainsboro text-2xl flex-none">
                    {turn == first ? "Your" : "Opponent's"} turn
                </p>
            ) : (
                <div>
                    <p className="mb-2 px-5 py-3 text-gainsboro text-2xl flex-none">
                        {turn != first ? "You win!" : "Opponent wins :c"}
                    </p>
                </div>
            )}
            <Table table={table} onClick={handleTurn} />
        </div>
    ) : (
        <div className="bg-charcoal w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="mb-14 text-gainsboro text-4xl font-bold flex-none">
                {msg}
            </h1>
        </div>
    );
};
export default Multiplayer;
