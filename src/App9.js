/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments 
 * in the code for some help on accomplishing this one
 * 
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

import React from "react"
import TodoItem from "./components/MainContent"
import todoData from "./todoData"

class App9 extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id){
        /**Don't overwrite the state, hence for any state changing, you have to create a d new array of state */
        this.setState(prevState => {
            const updatedTodo = prevState.todos.map(todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodo
            }
        })
    }

    render(){
        const todoItems = this.state.todos.map(item => 
            <TodoItem key={item.id} item = {item} event={this.handleChange}/>) /**Don't forget to include the function as the prop to pass to children. Because we need this function */

        return(
            <div>
                {todoItems}
            </div>
        )
    }
}

export default App9