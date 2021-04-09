import React,{useState} from 'react';
import {Input,Button} from 'antd';



const Message = (props) => {
    const {updateMessages} = props
    const [input,updateInput] = useState('')

    return (
        <div className="message">
            <Input
                placeholder={"Type a Message"} 
                value={input}
                onChange={(e) => updateInput(e.target.value)}
            />
            <Button onClick={() => {
                const obj =  {
                    type : "user",
                    text : input
                }
                updateMessages(obj)
            }}>Send1</Button>
            <Button onClick={() => {
                const obj =  {
                    type : "reply",
                    text : input
                }
                updateMessages(obj)
            }}>Send2</Button>
        </div>
    )
}

export default Message