import React, {useState} from 'react';
import Square from './Square.js'

const Table = () => {
    const [table, setTable] = useState([['','',''],['','',''],['','','']])
    const [turn, setTurn] = useState(true) //true is circle's turn, false is cross's turn

    const handleTurn = (row, col) => {
        if(table[row][col] != 'o' && table[row][col] != 'x') {
            turn ? table[row][col] = 'o' : table[row][col] = 'x';
            setTurn(!turn);
        }
    }


    return (
        <div className='w-1/3 p-1 aspect-square shadow-2xl rounded-md bg-blue'>
            {table.map((row, i) => {
                return (
                <div key={i} className='flex h-1/3 p-1 gap-2'>
                    {row.map((col, j) => {
                        return <Square key={j} onClick={() => handleTurn(i, j)}>{col}</Square>
                    })}
                </div>
                )
            })}        
        </div>
    )
}

export default Table;