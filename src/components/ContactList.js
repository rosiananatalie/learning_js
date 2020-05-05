import React from "react"

function ContactList (props) {
    return (
        <div>
            <img src = {props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phoneNo}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}



export default ContactList