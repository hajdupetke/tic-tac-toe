import React, {useState} from 'react';
import Square from './Square.js'

const Table = () => {
    const [table, setTable] = useState([['x','x','o'],['x','x','x'],['x','x','x']])
    const [turn, setTurn] = useState(true) //true is circle's turn, false is cross's turn
    return (
        <div className='w-1/3 p-1 aspect-square shadow-2xl rounded-md bg-blue'>
            {table.map((row, i) => {
                return (
                <div className='flex h-1/3 p-1 gap-2'>
                    {row.map((col, j) => {
                        return <Square>{col}</Square>
                    })}
                </div>
                )
            })}        
        </div>
    )
}

export default Table;