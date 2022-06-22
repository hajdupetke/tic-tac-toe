import "./index.css";
import React, { useState } from "react";
import Table from "./components/Table.js";

const App = () => {
  const [table, setTable] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [win, setWin] = useState(false);
  const [turn, setTurn] = useState(true); //true is circle's turn, false is cross's turn

  const handleWin = () => {
    setWin(true);
  };

  const handleTurn = () => {
    setTurn(!turn);
  };

  const restart = (e) => {
    e.preventDefault();
    table.map((x, i) => x.map((y, j) => table[i][j] = ''))
    setTurn(true);
    setWin(false);
  };

  return (
    <div className="bg-charcoal w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="mb-28 text-gainsboro text-4xl font-bold flex-none">
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
          <button
            className="mb-12 rounded-full bg-red px-5 py-3 hover:bg-hover text-gainsboro shadow-2xl"
            onClick={restart}
          >
            New Game
          </button>
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
export default App;
