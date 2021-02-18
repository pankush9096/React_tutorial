import React, { Component } from 'react'

class Greet extends Component {
    render() {
        return <h1>Class Component</h1>
    }
}

export default Greet

// Destructing is unpacking the array values or props from object
// firstway of destructing prop
export const Properties = (props) =>{ //using props is we are destructing it so we can value coming as props in our component
    console.log(props);
    return(
        <div>
         <h1>Hello { props.name } { props.lname }</h1>
         {props.children}
         </div>
    )
}

// Second way of destructing prop, directly doing at arrow function
// export const Properties = ( { name, lname, children} ) =>{ 
//     return(
//         <div>
//          <h1>Hello { name } { lname }</h1>
//          {children}
//          </div>
//     )
// }

// Third way of destructing prop, decoupling it as const and using it
// export const Properties = props =>{ 
//     const { name, lname } = props
//     return(
//         <div>
//          <h1>Hello { name } { lname }</h1>
//          {props.children}
//          </div>
//     )
// }

export class ClassProps extends Component {
    render() {
        return <h1>Welcome {this.props.name} {this.props.lname} </h1>
    }
}
