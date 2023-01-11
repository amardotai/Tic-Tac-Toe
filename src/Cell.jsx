import React from 'react';

const cell = (props) => {
    return <div className='cell' onClick={props.onClick}>
        <h1>{props.value}</h1>
    </div>
} 

export default cell;