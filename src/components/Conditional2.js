import React from "react"

function Conditional2 (props){
    const messages = props.messages.map(message => (<p>{message}</p>))

    return (
        <div>
            <h1>Hello, {props.username}!</h1>
            <h2>You have {props.messages.length} unread messages</h2>
            <p>Your messages: {messages}</p>
        </div>
    )
}


export default Conditional2