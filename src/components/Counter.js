import React, { Component } from 'react'

class Counter extends Component {
// ES7 templete rconst used
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    Incrementone(){
        this.setState(
            //this setstate function first paramter defined for new state to set and it is using the current state to increment it.
            {
            count: this.state.count + 1
        },
        // This is second parameter of setstate function which is callback function which will execute after new state is set.
        () => {
            console.log('Callback Value', this.state.count);
        }
        )
        // This console.log will run before new state will be set as calls to setstate function is async
        console.log(this.state.count);
    }

    IncrementTwo(){
        this.setState(
            // Here we are using prevState instead of current state so with multiple call it will get incremented.
            // Passing it as function to set state the next parameter of this funtion is props if we want to update value based on prop
            (prevState) => ({
                count: prevState.count +1
            }),
            () => {
                console.log('Callback Value', this.state.count);
            }
        )
        console.log('outside of setstate',this.state.count)
    }

    increment(){
        // This will only increment once to 1 as React group the multple calls to set state into one and current state was 0 incremented to 1
        this.Incrementone()
        this.Incrementone()
        this.Incrementone()
        this.Incrementone()
        this.Incrementone()
    }

    incrementFive() { 
        // This will not group because of prev state use and will be incremented to 5
        this.IncrementTwo()
        this.IncrementTwo()
        this.IncrementTwo()
        this.IncrementTwo()
        this.IncrementTwo()
    }
    
    render() {
        return (
            <div>
               <div>Count - {this.state.count} </div> 
               <button onClick={() => this.increment()}>Incrementone</button> 
               <button onClick={() => this.incrementFive()}>Incrementfive</button>
            </div>
        )
    }
}

export default Counter
