import React from 'react';



const Content = (props) => {
    const {messages} = props;

    return (
        <div className={"content"}>
           {messages && messages.map((msg) => {
               return (
               <div className={msg.type === "reply" ? "replymsg" : "usermsg"}>
                   <div className="msg">
                   {msg.text}
                   </div>
               </div>)
           })}
        </div>
    )
}

export default Content