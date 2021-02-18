import React, { Component } from 'react'

class Conditionalrendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }

    changedSate(){
        this.setState({
            isLoggedIn: true 
        },
        () => {
            console.log('Callback Value', this.state.isLoggedIn);
        })
        // console.log(this.state.isLoggedIn);
    }
    
    render() { 
        //First way is Direct if/else
        // If/else statement should always be written outside jsx
        
        // if (this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <div>Welcome Pankush</div>
        //             <button onClick={() => this.changedSate()}>Login</button>
        //         </div>    
        //     )
        // } else {
        //     return (
        //         <div>
        //             <div>Welcome Guest</div>
        //             <button onClick={() => this.changedSate()}>Login</button>
        //         </div>    
        //     )
        // }

        //Second way is using Element Variable where we just have to define once in return statement
        // message is the element which stores the element to be rendered

        // let message
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome Pankush</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         <div>{message}</div>
        //         <button onClick={() => this.changedSate()}>Login</button>
        //     </div>    
        // )

        //Third and Preferrably used way is Ternary operator approach
        //here state is validated and based on its value if true first block of code after ? is executed and if false then seond block after :

        return this.state.isLoggedIn ? (
        <div>
           <div>Welcome Pankush</div>
           <button onClick={() => this.changedSate()}>Login</button>
        </div>
        ) : (
        <div>
            <div>Welcome Guest</div>
            <button onClick={() => this.changedSate()}>Login</button>
         </div>
        )

        //Fourth is peculiar case for third ternary operator approach, where if we have true condition then only return UI else do not return anything.
       
        // return this.state.isLoggedIn && <div>Welcome Pankush</div>
       
        //So first state will be evaluated and if it has true value then div tag after ampersand will be rendered else for false it wont render div anything



    }
}

export default Conditionalrendering
