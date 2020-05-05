import React from "react"

function Joke (props) {
    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <p style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</p>
            <hr/>
        </div>
    )
}

export default Joke