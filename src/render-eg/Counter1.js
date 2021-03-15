import React from 'react';

const Counter1 = (props) => {
    return <div>
        <button onClick={props.incCount}>
        {props.count}
        </button>
    </div>
}

export default Counter1