import React, {useState} from 'react';


const Table = () => {
    const [table, setTable] = useState([['','',''],['','',''],['','','']])
    const [turn, setTurn] = useState(true) //true is circle's turn, false is cross's turn
    return (
        <div>
            {table.map(x => {
                
            })}
        </div>
    )
}

export default Table;