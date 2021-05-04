import React,{useState} from 'react';

export default function Filter({render,placeholder}){
    const [query,updateQuery] = useState("");

    return (
    <>
        <input
            type="text"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
            placeholder={placeholder}
        />
        {render(query)}
    </>
    )
}