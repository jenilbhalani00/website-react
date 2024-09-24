import React from 'react'
import { Container } from 'react-bootstrap'

export default function Four() {
    return (
        <section>

            <Container>
                <div className='flex'>
                    <div className='write'>
                        <h1>Helping millions of owners <br />create a business that<br /> works.</h1>
                        <h5 className='fw-light'>My name is John Adams and I am a business coach and trainer. I work <br />
                            with you to increase your awareness and choices, so you can set<br />
                            meaningful goals and get the results you truly want. I will challenge you <br />
                            to learn and think differently.</h5>
                        <button className='btn4'>More about me</button>
                    </div>
                    <div className='img1'><div> <img src={require('../assets/asset 2.jpeg')}></img></div></div>
                </div>
            </Container>

        </section>
    )
}
