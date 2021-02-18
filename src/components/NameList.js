import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Python'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Aws'
        }
      ]

     //using multiple html render in map function
    // const personList = persons.map (person => (
    //     <h2>
    //         I am {person.name}. I am {person.age} years old. I know {person.skill}
    //     </h2>
    // ))
    
    //using JS map funtion to map a function to each value of names array ,
    //mapping function will receive an arrow function, person used in our arrow fuction body is passed between {} as they are JS code and to use pass it in react we use {}
    //Passing Method as a prop with required Key prop with unique value as Key is required when rendering list of items and it is not accessible in child component & can not use in our component.
    // here we can use any unique value id or name anything.
    const personList = persons.map(person => <Person key={person.id} person={person} />)


    //When we dont have a unique values we have option to use element index as key value
    const names = ['Bruce', 'Diana', 'Clark', 'Bruce'] 
    //in map funtion it takes two arguement first the element second the index of elemnt.
    //second is optional but we are using it as we will use it to pass it as key for uniqueness
    //index and name used in our arrow fuction body is passed between {} as they are JS code and to use oass it in react we use {}
    const nameList = names.map( (name, index) => <h2 key={index}> {index} {name}</h2>)

    

// we are just returning the new updated list
return (
<div>
    {nameList}
    {personList}
</div>
)

// return (
//     <div>
//                 <h2>{names[0]}</h2>
//         {

//         names.map( name => <h2>{name}</h2>)
// }
//     </div>
// )
}

export default NameList
