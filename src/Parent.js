import React from 'react'
import Child from './Child'

export default function Parent() {

    // let name ='jenil'
    // let name1=['10','20','30']
    let database = [
        {
            name: 'akshay',
            age: '19'
        },

        {
            name:'jil',
            age:'20'
        },

        {
            name:'vikas',
            age:'23'
        },
    ]


    return (
        <>
            {/* {name} */}


            {/* {name1} */}
{/*             
     {
        name1.map((item,index,array)=>{
            return(
                <li>{item}</li>
            )
        })
    }  
 */}


    {/* {
            database.map((item)=>{
                return(
                    // <>
                    //     <li>{item.name}</li>
                    // </>
                    <h1 style={{color:'green'}}>{item.age} {item.name} </h1>
                )
            })
        }
 */}

    <Child data={database}></Child>



        </>
    )
}
