import React from "react"

class App14 extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColour: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        /** function will (1) grab the current value of the input box, 
         * (2) udpate the state to whatever value that we have in the text box. */
        const {name, value, type, checked} = event.target /** THIS IS IMPORTANT!!! */
        type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({[name]: value})       
    }

    handleSubmit(event){
        /** Code on how to handle the submit button belongs here. */      
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}> {/** the submit is preferable to be included in the form tag */}
                {/** text field */}
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

                <br />

                {/** text area */}
                <textarea 
                    value = {"Some default value for the text area"}
                    onChange = {this.handleChange}
                />

                <br />

                {/** checkbox */}
                <input 
                    type = "checkbox"
                    name = "isFriendly" 
                    checked = {this.state.isFriendly}
                    onChange = {this.handleChange}
                /> isFriendly?

                <br />
                
                {/** radio button */}
                <input 
                    type = "radio"
                    name = "gender" 
                    value = "male"
                    checked = {this.state.gender === "male"}
                    onChange = {this.handleChange}
                /> male

                <br />

                <input 
                    type = "radio"
                    name = "gender" 
                    value = "female"
                    checked = {this.state.gender === "female"}
                    onChange = {this.handleChange}
                /> female

                <br />

                {/** select attribrute */}
                <label>Favorite Colour: </label>
                <select
                    value = {this.state.favColour}
                    onChange = {this.handleChange}
                    name = "favColour"
                >
                    <option value = "blue">Blue</option>
                    <option value = "green">Green</option>
                    <option value = "red">Red</option>
                    <option value = "black">Black</option>
                </select>
                    

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are : {this.state.gender}</h2>
                <h2>Color: {this.state.favColour}</h2>

                <button>Submit</button>
            </form>
        )
    }
}

export default App14