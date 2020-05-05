import React from "react"

function Product (props){
    return (
        <div>
            <h3>ID: {props.id}</h3>
            <h3>Name: {props.name}</h3>
            <p>Price: {props.price}</p>
            <p>Description: {props.description}</p>
        </div>
    )
}


export default Product