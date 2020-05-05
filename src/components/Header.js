import React from "react"

function Header(){
    const firstName = "Rosiana"
    const lastName = "Natalie"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12){
        timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return(
        <h1 className ="navbar"> Hi {`${firstName} ${lastName}`}, Good {timeOfDay}  </h1>
    )
}

export default Header