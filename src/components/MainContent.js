import React from "react"

function MainContent(props){

    // fill this up with the program operation like calculation and if-else statement
    // XXXXXX

    //Don't forget to return at the end
    return(
        <div className ="todo-list">
            <input type = "checkbox" checked = {props.item.completed}/>
            <p>{props.item.text}</p>
        </div>     
    )
}

export default MainContent