import React from 'react';

export default function List({query,filterKey,items,id,render}){
    const filteredItems = items.filter((item) => {
        return item[filterKey] === query})
    return (
        <ul>
            {filteredItems.map((item) => {
                return <li key={item[id]}>
                    {render(item)}
                </li>
            })}
        </ul>
    )
    
}