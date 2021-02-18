// ES7 Template use rfce
import React, { Component } from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button Clicked')
    }
    return (
        <div>
            <button onClick= {clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick

export class ClassClick extends Component {

    ClassEvent(){
        console.log('Class Event Clicked')
    }
    render() {
        return (
            <div>
                <button onClick={() => this.ClassEvent()}>Click Class Event</button>
            </div>
        )
    }
}


// Binding Event Handling

export class BindingEvent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Event Binding Test'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message: "Event Binded after click"
        })
        console.log(this);
    }

    clickHandler2 =() => {
        this.setState({
            message: "Event Binded after click"
        })
        console.log(this);
    }
    
    render() {
        return (
            <div>
            <p>{ this.state.message }</p>
            {/* firstway of event binding binding in render method ,
            this will cause it to rerender on any update to state which inturn creates
            event handler everytime which can cause performance issue in large and nested components*/}
            <button onClick= {this.clickHandler.bind(this)}>Click using bind method</button> 
            {/* second way of event binding is arror function binding with eventhandler function call 
            but in some scenarios it also has performance issues*/}
            <p></p>
            <button onClick= {() => this.clickHandler()}>Click using arrow fucntion method</button> 
            {/* Third way of event binding is binding eventhandler in constructor defination as binding happens once 
            this is preferred method*/}
            <p></p>
            <button onClick= {this.clickHandler}>Click using binding in constructor method</button> 
            {/* Fourth way of event binding is binding eventhandler as properties of class with making eventhandler as arrow function 
            this is still not a preferred method*/}
            <p></p>
            <button onClick= {this.clickHandler2}>Click using binding in class property method</button> 
            </div>
        )
    }
}


