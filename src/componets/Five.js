import React from 'react'
import { Container } from 'react-bootstrap'

export default function Five() {
    return (
        <section>
            <Container>
                <div className='flex my-5'>
                    <div>
                        <h1>I am here for you and your business — <br />every step of the way.</h1>
                        <h6 className='mt-4 fw-light'>Here’s how I can help you improve various aspects of your business through coaching.</h6>
                    </div>
                    <div className='p-5'><button className='p-2 rounded-2 px-3'>free consulting</button></div>
                </div>
            </Container>
        </section>
    )
}
