import React,{useState} from 'react';

export default function MyComp({render}){
    const [state,updateState] = useState("ON")

    onclick=(e)=> {
        e.stopPropagation()
        updateState(state === "ON" ? "OFF" : "ON")
    }

    return (
        <div>{render(state,onclick)}</div>
    )
}