import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container } from 'react-bootstrap'

export default function Nine() {
    return (
        <section className='py-5 mb-5' >
            <Container>
                <OwlCarousel className='owl-theme' loop margin={10} >
                    <div class='item '>
                        <div className='bg p-4 rounded-3 ' style={{ height: '200px', width: '350px' }}>
                            <p className='fw-bold'>My clients appreciate the provided guidanceand assistance
                                I offer along the way to help them be stronger
                                unlock the full potential of  Read their
                                testimonials below.how are you....</p>
                        </div>
                        <div className='d-flex'>
                            <div className='profile mt-5'><img src={require('../assets/asset 3.jpeg')}></img></div>
                            <div className='mt-5'>
                                <h4 className='ms-3 py-1'>Andrew Jackson</h4>
                                <h6 className='fw-light ms-3'>28.10.2023</h6>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div className='bg p-4 rounded-3 ' style={{ height: '200px', width: '350px' }}>
                            <p className='fw-bold'>My clients appreciate the provided guidanceand assistance
                                I offer along the way to help them be stronger
                                unlock the full potential of  Read their
                                testimonials below.how are you....</p>
                        </div>
                        <div className='d-flex'>
                            <div className='profile mt-5'><img src={require('../assets/asset 3.jpeg')}></img></div>
                            <div className='mt-5'>
                                <h4 className='ms-3 py-1'>Andrew Jackson</h4>
                                <h6 className='fw-light ms-3'>28.10.2023</h6>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div className='bg p-4 rounded-3 ' style={{ height: '200px', width: '350px' }}>
                            <p className='fw-bold'>My clients appreciate the provided guidanceand assistance
                                I offer along the way to help them be stronger
                                unlock the full potential of  Read their
                                testimonials below.how are you....</p>
                        </div>
                        <div className='d-flex'>
                            <div className='profile mt-5'><img src={require('../assets/asset 3.jpeg')}></img></div>
                            <div className='mt-5'>
                                <h4 className='ms-3 py-1'>Andrew Jackson</h4>
                                <h6 className='fw-light ms-3'>28.10.2023</h6>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div className='bg p-4 rounded-3 ' style={{ height: '200px', width: '350px' }}>
                            <p className='fw-bold'>My clients appreciate the provided guidanceand assistance
                                I offer along the way to help them be stronger
                                unlock the full potential of  Read their
                                testimonials below.how are you....</p>
                        </div>
                        <div className='d-flex'>
                            <div className='profile mt-5'><img src={require('../assets/asset 3.jpeg')}></img></div>
                            <div className='mt-5'>
                                <h4 className='ms-3 py-1'>Andrew Jackson</h4>
                                <h6 className='fw-light ms-3'>28.10.2023</h6>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div className='bg p-4 rounded-3 ' style={{ height: '200px', width: '350px' }}>
                            <p className='fw-bold'>My clients appreciate the provided guidanceand assistance
                                I offer along the way to help them be stronger
                                unlock the full potential of  Read their
                                testimonials below.how are you....</p>
                        </div>
                        <div className='d-flex'>
                            <div className='profile mt-5'><img src={require('../assets/asset 3.jpeg')}></img></div>
                            <div className='mt-5'>
                                <h4 className='ms-3 py-1'>Andrew Jackson</h4>
                                <h6 className='fw-light ms-3'>28.10.2023</h6>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div className='bg p-4 rounded-3 ' style={{ height: '200px', width: '350px' }}>
                            <p className='fw-bold'>My clients appreciate the provided guidanceand assistance
                                I offer along the way to help them be stronger
                                unlock the full potential of  Read their
                                testimonials below.how are you....</p>
                        </div>
                        <div className='d-flex'>
                            <div className='profile mt-5'><img src={require('../assets/asset 3.jpeg')}></img></div>
                            <div className='mt-5'>
                                <h4 className='ms-3 py-1'>Andrew Jackson</h4>
                                <h6 className='fw-light ms-3'>28.10.2023</h6>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>

            </Container>
        </section>
    )
}
