import React, {useState} from 'react';
import Square from './Square.js'

const Table = () => {
    const [table, setTable] = useState(Array(9).fill('x'))
    const [turn, setTurn] = useState(true) //true is circle's turn, false is cross's turn
    return (
        <div className='w-1/3 aspect-square shadow-2xl rounded-md bg-blue '>
            <div className='grid grid-cols-3 gap-4 py-3 pl-3'>
            {table.map(x => {
                return <Square>{x}</Square>
            })}
            </div>
        </div>
    )
}

export default Table;