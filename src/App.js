import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import ContactList from "./components/ContactList"
import todoData from "./todoData.js"

function App(){
    const todoComponent = todoData.map(todo => <MainContent key = {todo.id} item = {todo}/>)
    
    return (
        <div>
           <Header />

           <h5>This is to practice about mapping</h5>
            {todoComponent}

           <h5>This is to practice about putting props in a list</h5>
            <ContactList 
                contact = {{name: "abcd", imgUrl: "http://placekitten.com/400/300",
                phoneNo: "081123445", email: "abc@yahoo.com"
                }}
            />

            <Footer />
        </div>    
    )
}

export default App