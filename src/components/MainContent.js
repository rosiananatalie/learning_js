import React from "react"

function MainContent(props){

    const completedStyle = {
        fontStyle: "Italic",
        color : "#0095b5",
        textDecoration: "line-through"
    }

    // fill this up with the program operation like calculation and if-else statement
    // XXXXXX

    //Don't forget to return at the end
    return(
        <div className ="todo-list">
            <input 
                type = "checkbox" 
                checked = {props.item.completed} /**determine if the item is checked or not.*/
                onChange = {() => props.event(props.item.id)} /** make an arrow function because we were trying to pass the function result, not an object. Hence, if you only put the props.event, then it won't do anything */
            />
            <p style = {props.item.completed ? completedStyle : null}>{props.item.text}</p>

        </div>     
    )
}

export default MainContent