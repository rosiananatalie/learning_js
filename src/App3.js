import React from "react"
import Product from "./components/Product.js"
import vschoolProduct from "./vschoolProduct.js"

function App3 (){
    const productComponent = vschoolProduct.map(product => 
        <Product id = {product.id} 
        name = {product.name}
        price = {product.price}
        description = {product.description}
        />
        )
    
    return (
        <div>
            {productComponent}
        </div>
    )
}

export default App3