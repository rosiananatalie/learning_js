import React from "react"

class App13 extends React.Component{
    constructor(){
        super()
        this.state = {
            loading : false,
            character: {}
        }
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch("https://swapi.dev/api/people/2")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }

    render (){
        const text = this.state.loading ? "loading.." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App13