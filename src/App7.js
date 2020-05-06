import React from "react"

function handleClick() {
    console.log("I was clicked")
}

// https://reactjs.org/docs/events.html#supported-events

function App7() {
    return (
        <div>
            <img onMouseOver={() => console.log("Hovered!")} src="http://placekitten.com/400/300"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App7