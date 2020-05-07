import React from "react"

class App14 extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        /** function will (1) grab the current value of the input box, 
         * (2) udpate the state to whatever value that we have in the text box. */
        const {name,value} = event.target /** THIS IS IMPORTANT!!! */
        this.setState({
            [name]: value
        })/** represents the element */       
    }

    render(){
        return(
            <form>
                <input 
                    type = "text" 
                    name = "firstName" 
                    value = {this.state.firstName}
                    placeholder="First Name" 
                    onChange = {this.handleChange}
                />
                <br />
                <input 
                    type = "text" 
                    name = "lastName" 
                    value = {this.state.lastName}
                    placeholder="Last Name" 
                    onChange = {this.handleChange}/>
                
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App14