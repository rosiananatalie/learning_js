import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import ContactList from "./components/ContactList"
import todoData from "./todoData.js"


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            todo : todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todo.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoComponent = todoData.map(item => <MainContent key = {item.id} item = {item} event = {this.handleChange}/>) 
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
}

export default App