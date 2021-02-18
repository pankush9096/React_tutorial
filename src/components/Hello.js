import React from 'react'

export const Hello=()=>{
    return(
        <div>
            <h1>Hello JSX</h1>
        </div>
    )
}

export const Withoutjsx = () =>{
    return( React.createElement('div', null, React.createElement('h1',null,'Without JSX')))
}