import React from 'react'
import { Container } from 'react-bootstrap'

export default function Seven() {
    return (
        <section className='bg2'>
            <Container>
                <div className='d-flex justify-content-between'>

                    <div className='p-5 my-5'>
                        <h1>Working together <br />for your better life!</h1> <br />
                        <p>At Lead Planner, I strive to help you achieve ambitious goals<br />
                            and reach new heights just by focusing on what’s important<br /> for you.</p>
                    </div>
                    <div className='p-5 my-5'>
                        <p >An experienced business coach can easily help you get more from your <br />
                            business by setting clear goals and planning your actions on the way to <br />success.</p>
                        <h5 className='fw-light'>As a professional and highly experienced business coach, I <br />
                            will be glad to guide you towards new goals for both you<br />
                            and your team. By ensuring the geometric growth of your<br />
                            business, you can push your company to the limit in order <br />
                            to get what you want.</h5>
                        <br /><br />
                        <div className='d-flex'>
                            <div className='profile'><img src={require('../assets/asset 3.jpeg')}></img></div>
                            <div className='ms-3 py-1'>
                                <h4>John Adams</h4>
                                <h6 className='fw-light'>Business coach, founder of Lead Planner</h6>
                            </div>
                        </div><br /><br />
                        <button className='btn5'>More about me</button>


                    </div>

                </div>
            </Container>
        </section>
    )
}
