import React from 'react'

export default function Second() {
    return (
        <section className='bg'>
            <div className='flex'>
                <div className='write'>
                    <h1>Transform your <br />business. Take back <br />your life.</h1>
                    <h5>Get the most out of your business with my coaching services.</h5>
                    <button className='btn2'>MORE about me</button>
                    <button className='btn3'>Free consultaion </button>
                </div>
                <div className='img1'>
                    <div> <img src={require('../assets/asset 1.png')}></img></div>
                </div>
            </div>

        </section>
    )
}
