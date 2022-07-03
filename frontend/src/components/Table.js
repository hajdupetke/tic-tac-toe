import React, { useState } from "react";
import Square from "./Square.js";

const Table = (props) => {
    const { table, onClick } = props;

    return (
        <div className="w-1/3 p-1 aspect-square shadow-2xl rounded-md bg-blue">
            {table.map((row, i) => {
                return (
                    <div key={i} className="flex h-1/3 p-1 gap-2">
                        {row.map((col, j) => {
                            return (
                                <Square key={j} onClick={() => onClick(i, j)}>
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
