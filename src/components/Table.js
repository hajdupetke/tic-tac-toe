import React, { useState } from "react";
import Square from "./Square.js";

const Table = (props) => {
  const {table, win, setWin, turn, setTurn } = props;

  const handleTurn = (row, col) => {
    if (!win && table[row][col] !== "o" && table[row][col] !== "x") {
      turn ? (table[row][col] = "o") : (table[row][col] = "x");
      setTurn(!turn);
      checkWin();
    }
  };

  const checkWin = () => {
    //check rows
    let row = 0;
    while (!win && row < 3) {
      if (
        (table[row][0] === "x" || table[row][0] === "o") &&
        table[row][0] === table[row][1] &&
        table[row][1] === table[row][2]
      ) {
        setWin(true);
      }
      row++;
    }

    //check col
    let col = 0;
    while (!win && col < 3) {
      if (
        (table[0][col] === "x" || table[0][col] === "o") &&
        table[0][col] === table[1][col] &&
        table[1][col] === table[2][col]
      ) {
        setWin(true);
      }
      col++;
    }

    //check diagonals
    if (
      !win &&
      (table[1][1] === "x" || table[1][1] === "o") &&
      ((table[0][0] === table[1][1] && table[1][1] === table[2][2]) ||
        (table[0][2] === table[1][1] && table[1][1] === table[2][0]))
    ) {
      setWin(true);
    }
  };

  return (
    <div className="w-1/3 p-1 aspect-square shadow-2xl rounded-md bg-blue">
      {table.map((row, i) => {
        return (
          <div key={i} className="flex h-1/3 p-1 gap-2">
            {row.map((col, j) => {
              return (
                <Square key={j} onClick={() => handleTurn(i, j)}>
                  {col}
                </Square>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Table;
