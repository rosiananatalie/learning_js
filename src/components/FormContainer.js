/** This document cares only about the UI presentation of the form page.  */

import React from "react"
import FormComponent from "./FormComponent"

class Form extends React.Component {
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
        return(
            <FormComponent 
                handleChange = {this.handleChange}
                data = {this.state}
            />
        )
    }
}

export default Form