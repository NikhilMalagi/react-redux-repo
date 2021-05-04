import React from 'react';
// import './style.css';
import MyComp from './MyComp';
// import screencasts from './data.json';
import Toggle from './Toggle';

export default function AppToggle(){
    return (
    <MyComp 
      render={(state,toggle) => <Toggle 
        btnState={state}
        handleClick={toggle}
        />
    }
    />)
}