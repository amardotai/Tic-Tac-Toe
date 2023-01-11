import React from 'react';

const Winner = (props) => {
    return <div className="winner">
        <h1>{props.value} Won the game</h1>
    </div>
}

export default Winner;