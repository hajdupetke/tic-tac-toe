import React, { useState } from "react";
import Table from "../components/Table.js";
import { checkWin } from "../logic/Game";

const Singleplayer = () => {
    const [table, setTable] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    const [win, setWin] = useState(false);
    const [turn, setTurn] = useState(true); //true is circle's turn, false is cross's turn

    const handleTurn = (row, col) => {
        if (!win && table[row][col] !== "o" && table[row][col] !== "x") {
            turn ? (table[row][col] = "o") : (table[row][col] = "x");
            setTurn(!turn);
            setWin(checkWin(table));
        }
    };

    const restart = (e) => {
        e.preventDefault();
        table.map((x, i) => x.map((y, j) => (table[i][j] = "")));
        setTurn(true);
        setWin(false);
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
            {win ? (
                <button
                    className="mb-5 mt-5 rounded-full bg-red px-5 py-3 hover:bg-hover text-gainsboro shadow-2xl"
                    onClick={restart}
                >
                    New Game
                </button>
            ) : (
                <></>
            )}
        </div>
    );
};
export default Singleplayer;
