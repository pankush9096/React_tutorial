import React, { Component } from 'react'

//This is a controlled component where state is single truth handling the input value, initially we assigned empty string as value in input tag.
//after a value of input field will be chnaged the change handler will get fired which will uset new value of state and componenet will be rendered again giving new value of state

class FormHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    
    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                
            </form>
        )
    }
}

export default FormHandling
