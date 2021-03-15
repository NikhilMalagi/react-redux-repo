import React from 'react';

const Counter2 = (props) => {
    return <div >
        <button style={{background : "blue"}} onClick={props.incCount}>
        {props.count}
        </button>
    </div>
}

export default Counter2