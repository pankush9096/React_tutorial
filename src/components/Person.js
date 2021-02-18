  
import React from 'react'

function Person(props) {
    const { person } = props
  return (
    <div>
      <h2>
        I am {person.name} with id {person.id}. I am {person.age} years old. I know {person.skill}
      </h2>
    </div>
  )
}

export default Person