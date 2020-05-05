import React from "react"
import Joke from "./components/Joke"
import jokesData from "./jokesData"

```
This js app function maps, reusable component
```

function App2() {
    const jokeComponents = jokesData.map(joke => <Joke key = {joke.id} question = {joke.question} punchLine = {joke.punchLine} />)

    return (
        <div>
            {jokeComponents}            
        </div>
    )
}

export default App2