import React from 'react';

export default function Toggle({btnState,handleClick}){
    return (
        <button onClick={handleClick}>{btnState}</button>
    )
}