import React from "react"
import Conditional2 from "./components/Conditional2"

class App11 extends React.Component{
    constructor(){
        super()
        this.state = {
            unreadMessages: [
                "Call my boyfriend", "Call my Mom!"
            ],
            username: "Rosiana Natalie"
                
        }
    }

    render(){
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 &&
                    <Conditional2 messages = {this.state.unreadMessages} username = {this.state.username}/>
                }
            </div>
        )
    }
}

export default App11