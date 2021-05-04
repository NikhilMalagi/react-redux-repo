import React from 'react';
// import './style.css';
import List from './List';
import Filter from './Filter';
import screencasts from './data.json';
import Screencast from './Screencast';

export default function Application(){
    return (
    <Filter render={(query => {
        return (
        <List 
            query={query}
            filterKey={`title`}
            items={screencasts}
            id={`ext_id`}
            render={screencast => <Screencast
                ext_id={screencast.ext_id}
                titel={screencast.titel}
                />
            }
            />)
    })}/>
    )
}