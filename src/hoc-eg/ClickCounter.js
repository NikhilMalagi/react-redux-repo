import React from 'react';
import withCounter from './withCounter';


const ClickCounter = (props) => {
    return (
        <button onClick={props.updateCount} >Clicked {props.counter} times</button>
    )
}

export default withCounter(ClickCounter,"another Prop")