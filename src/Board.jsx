import React,{useState} from 'react';
import Cell from "./Cell"
const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState(true);
    const handleClick = (i)=>{
        const newState = [...state];
        newState[i] = player?"X":"O";
        setState(newState);
        setPlayer(!player);
    }
    const winner = () => {
        
    }
    return <div className='board'>
      <div className="row">
        <Cell onClick={() => handleClick(0)} value={state[0]} />
        <Cell onClick={() => handleClick(1)} value={state[1]} />
        <Cell onClick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className="row">
        <Cell onClick={() => handleClick(3)} value={state[3]} />
        <Cell onClick={() => handleClick(4)} value={state[4]} />
        <Cell onClick={() => handleClick(5)} value={state[5]} />
      </div>
      <div className="row">
        <Cell onClick={() => handleClick(6)} value={state[6]} />
        <Cell onClick={() => handleClick(7)} value={state[7]} />
        <Cell onClick={() => handleClick(8)} value={state[8]} />
      </div>
    </div>
}

export default Board;