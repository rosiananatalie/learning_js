/** This document cares only about the logic for behind the display  */

import React from "react"

function FormComponent(props){
    return (
        <main>
            <form>
                <input 
                    name = "firstName"
                    placeholder = "First Name" 
                    value = {props.data.firstName}
                    onChange = {props.handleChange}
                />

                <br />

                <input
                    name = "lastName" 
                    placeholder = "Last Name" 
                    value = {props.data.lastName}
                    onChange = {props.handleChange}
                
                /><br />
                <input 
                    name = "age"
                    placeholder = "Age" 
                    value = {props.data.age}
                    onChange = {props.handleChange}
                /><br />
                
                {/* Create radio buttons for gender here */}
                <br />
                <input 
                    type = "radio"
                    name = "gender"
                    value = "female"
                    checked = {props.data.gender === "female"}
                    onChange = {props.handleChange}
                    /> Female

                <input 
                    type = "radio"
                    name = "gender"
                    value = "male"
                    checked = {props.data.gender === "male"}
                    onChange = {props.handleChange}
                /> Male
                
                {/* Create select box for location here */}
                <br />
                <label>Location: </label>
                <select
                    value = {props.data.location}
                    onChange = {props.handleChange}
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
                        onChange = {props.handleChange}
                        checked = {props.data.isVegan}
                    /> Vegan?
                    <input 
                        type = "checkbox"
                        name = "isKosher"
                        onChange = {props.handleChange}
                        checked = {props.data.isKosher}
                    /> Kosher?
                    <input 
                        type = "checkbox"
                        name = "isLactoseFree"
                        onChange = {props.handleChange}
                        checked = {props.data.isLactoseFree}
                    /> Lactose Free?
                </label>
                
                <br />
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.location}</p>
            <p>Your dietary restrictions: </p>
            <p>vegan : {props.data.isVegan ? "Yes" : "No"}</p>
            <p>kosher : {props.data.isKosher ? "Yes" : "No"}</p>
            <p>lactose: {props.data.isLactoseFree ? "Yes" : "No"}</p> 
        </main>
    )
}

export default FormComponent