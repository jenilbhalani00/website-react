import React from 'react'
import { Container } from 'react-bootstrap'
import { FiCommand } from 'react-icons/fi'

export default function Third() {
    return (
        <section>
            <Container>
                <div className='my-5 py-2'>
                    <h1 className='center'>I help people tackle their business issues</h1> <br />
                    <h5 className='center'>It’s easy to get the results you want with the top-quality advice.</h5>
                    <div className='flex my-5 py-5'>
                        <div className='p-5 '>
                            <FiCommand className='fs-1 my-3' />
                            <h1 className='my-2 rounded-4'>Career mentoring</h1>
                            <p>Accelerate your career and achieve <br />your goals through mentoring at <br /> Lead Planner.</p>
                        </div>
                        <div className='p-5 bg rounded-4'>
                            <FiCommand className='fs-1 my-3' />
                            <h1 className='my-2'>Career mentoring</h1>
                            <p>Accelerate your career and achieve <br />your goals through mentoring at <br /> Lead Planner.</p>
                        </div>
                        <div className='p-5 bg1 rounded-4'>
                            <FiCommand className='fs-1 my-3' />
                            <h1 className='my-2'>Career mentoring</h1>
                            <p>Accelerate your career and achieve <br />your goals through mentoring at <br /> Lead Planner.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
