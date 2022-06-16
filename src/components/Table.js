import React, {useState} from 'react';
import Square from './Square.js'

const Table = () => {
    const [table, setTable] = useState([['x','o','x'],['o','x','o'],['x','o','x']])
    const [turn, setTurn] = useState(true) //true is circle's turn, false is cross's turn
    return (
        <div className='w-2/5 h-0 pb-2/5 shadow-2xl rounded-md bg-blue'>
            <div className='grid grid-cols-3 gap-4'>
            {table.map(x => {
                return (
                    <div>
                    {x.map(y => (
                        <Square>{y}</Square>
                    ))}
                    </div>
                )})}
            </div>
        </div>
    )
}

export default Table;