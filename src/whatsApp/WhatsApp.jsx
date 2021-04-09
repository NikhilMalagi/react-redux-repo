import React,{useState} from 'react';
import UserDetails from './components/UserDetails';
import Content from './components/Content';
import Message from './components/Message';



const WhatsApp = () => {
    const [msgs,updateMsgs] = useState([
        {
            type : "user",
            text : "Hi"
        },
        {
            type : "reply",
            text : "Hi"
        },
        {
            type : "reply",
            text : "How are you doing?"
        },
        {
            type : "user",
            text : "I am fine"
        },
    ])

    const updateMessages = (message) => {
        const ms = [...msgs];
        ms.push(message)
        updateMsgs(ms)
    }
    return (
        <>
            <UserDetails user={'Nikhil'}/>
            <Content messages={msgs}/>
            <Message updateMessages={updateMessages}/>
        </>
    )
}

export default WhatsApp