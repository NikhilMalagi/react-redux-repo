import React from 'react';
import './style.css';

export default function Screencast({ext_id,title}){
    return (
        <div className="__dml_list_item">
            <a href={`https://www.youtube.com/watch?v${ext_id}`}>
                <img
                    src={`/thumbs/${ext_id}.png`}
                    width={`100%`}
                    alt={title}
                />
                <div>{title}</div>
            </a>
        </div>
    )
}