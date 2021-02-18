import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            parent: 'Parents'
             
        }

        this.greetparent = this.greetparent.bind(this)
    }

    //This is method used in child component and getting value of parameter from child component where it is used
     greetparent(childName) {
        //  alert('Hello' + this.state.parent)
         //ES6 Template defination
         alert(`Hello ${this.state.parent} from ${childName}`)
     }
    
    render() {
        return (
            // Here we are passing Parent component method as prop to child component which will be used there
            <div>
                <ChildComponent greethandler= {this.greetparent} />
            </div>
        )
    }
}

export default ParentComponent
