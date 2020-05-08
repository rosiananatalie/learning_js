import React from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */


class App15 extends React.Component {
    constructor (){
        super()
        this.state = {
            firstName : "",
            lastName: "",
            age: null,
            gender : "",
            location: "",
            isVegan : false,
            isKosher : false,
            isLactoseFree : false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target /** pulling elements */
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            }) : 
            this.setState({
                [name]: value
            })
    }

    render(){
        return (
            <main>
                <form>
                    <input 
                        name = "firstName"
                        placeholder = "First Name" 
                        value = {this.state.firstName}
                        onChange = {this.handleChange}
                    />
    
                    <br />

                    <input
                        name = "lastName" 
                        placeholder = "Last Name" 
                        value = {this.state.lastName}
                        onChange = {this.handleChange}
                    
                    /><br />
                    <input 
                        name = "age"
                        placeholder = "Age" 
                        value = {this.state.age}
                        onChange = {this.handleChange}
                    /><br />
                    
                    {/* Create radio buttons for gender here */}
                    <br />
                    <input 
                        type = "radio"
                        name = "gender"
                        value = "female"
                        checked = {this.state.gender === "female"}
                        onChange = {this.handleChange}
                     /> Female

                    <input 
                        type = "radio"
                        name = "gender"
                        value = "male"
                        checked = {this.state.gender === "male"}
                        onChange = {this.handleChange}
                    /> Male
                    
                    {/* Create select box for location here */}
                    <br />
                    <label>Location: </label>
                    <select
                        value = {this.state.location}
                        onChange = {this.handleChange}
                        name = "location"
                    >
                        <option value = ""> --Please select your location--</option>
                        <option value = "Singapore">Singapore</option> 
                        <option value = "India">India</option>     
                        <option value = "Indonesia">Indonesia</option>
                        <option value = "Netherland">Netherland</option>
                    </select> 
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    <label>
                        <input 
                            type = "checkbox"
                            name = "isVegan"
                            onChange = {this.handleChange}
                            checked = {this.state.isVegan}
                        /> Vegan?
                        <input 
                            type = "checkbox"
                            name = "isKosher"
                            onChange = {this.handleChange}
                            checked = {this.state.isKosher}
                        /> Kosher?
                        <input 
                            type = "checkbox"
                            name = "isLactoseFree"
                            onChange = {this.handleChange}
                            checked = {this.state.isLactoseFree}
                        /> Lactose Free?
                    </label>
                    
                    <br />
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>Your dietary restrictions: </p>
                <p>vegan : {this.state.isVegan ? "Yes" : "No"}</p>
                <p>kosher : {this.state.isKosher ? "Yes" : "No"}</p>
                <p>lactose: {this.state.isLactoseFree ? "Yes" : "No"}</p> 
            </main>
        )
    }
}

export default App15