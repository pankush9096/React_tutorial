import React from 'react'
import { Properties } from './Greet'

function ChildComponent(props) {
    return (
        // Here on click we are using method defined in Parent component which is passed here as props 
        // and using arrow function we are passing parameters to method
        <div>
            <button onClick= {() => props.greethandler('Pankush')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
