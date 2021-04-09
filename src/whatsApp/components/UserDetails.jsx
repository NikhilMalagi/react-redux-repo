import React from 'react';
import '../whatsApp.css'



const UserDetails = (props) => {
    const {user} = props;

    return (
        <div className={"header"}>
            <div className="headerTitle">
            <div>image</div>
            <div>{user}</div>
            </div>
            <div className="headerOptions">
                <div>Options</div>
            </div>
        </div>
    )
}

export default UserDetails