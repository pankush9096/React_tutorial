import React, { Component } from 'react'

class Message extends Component {
// Constructor and super is used to make a call to baseclass constructor of extended Component class
    constructor() {
        super()
        this.state={ //using this.state to set initial state
            message: 'Welcome Class State'
        }
    }
// creating function using setstate for setting changed state when a button will be clicked
    changeMessage() {
        this.setState({
            message: 'State changed after button click'
        })
    }


    render() {
        return ( // return only render single html tag so we pass div and all other tags within one dive
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button> 
        </div>
        )
    }
}

export default Message