import React from 'react';

const Finish = (props) => {
    return <div className="winner">
        <h1>{props.value} Won the game</h1>
        <button onClick={props.onClick}>Reset</button>
    </div>
}

export default Finish;