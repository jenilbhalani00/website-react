import React from 'react'

export default function Child(props) {
  return (
    <>

    {props.data.map((item)=>{
        return(
            <li>{item.age} {item.name}</li>
        )
    })}

    </>

  )
}
