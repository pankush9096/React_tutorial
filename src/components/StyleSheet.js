  
import React from 'react'
import '../myStyles.css'

function Stylesheet(props) {
    //Conditional syling based on props value
  let className = props.primary ? 'primary' : ''
  return (
    <div>
    <h2 className={className}>Basic Styling</h2>
        {/*using two classes together using back-tick and dynamic variable call */}
    <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet