/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

import React from "react"
import ReactDOM from "react-dom"

// #1
class App4 extends React.Component{
    render(){
        return (
            <div>
                <Header username = "hey hey"/>
                <Greeting />
            </div>
        )
    }
}

// #2
class Header extends React.Component{
    render(){
        return(
            <header>Welcome, {this.props.username}!</header>
        )
    }
}

// #3
class Greeting extends React.Component{
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}

export default App4
