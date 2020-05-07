import React from "react"
import Conditional from "./components/Conditional"

class App10 extends React.Component{
    constructor (){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    render(){
        return(
            <div>
                <h1>Nav</h1>
                
                {this.state.isLoading ? 
                    <h1>Loading....</h1> : 
                    <Conditional isLoading = {this.state.isLoading}/> 
                }
                
                <h1>Footer</h1>
            </div>
        )
    }
}

export default App10