import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";

export default function Header() {
    return (
        <div>
            <section className='bg-white fixed-top'>
                <Container className='flex1 '>
                    <div className='d-flex '>
                    <div className=' d-xl-none d-flex align-items-center'>
                    <FaBars />
                    </div>
                    <div className='img'>
                        <img src={require('../assets/asset 0.jpg')}></img>
                    </div>

                    </div>
                 
                    <div className='nav d-none d-xl-block '>
                        <div className=' flex1'>
                            <ul className=" header flex1">
                                <li><Link className='nav-item' to='/'>HOME</Link></li>
                                <li><Link className='nav-item' to='/footer'>COURSE</Link></li>
                                <li><a>ACTIVITIES</a></li>
                                <li className='mainmenu'><a>BLOG</a>
                                    <ul className="submenu">
                                        <li><a>HOME</a></li>
                                        <li><a>HOME</a></li>
                                        <li><a>HOME</a></li>
                                    </ul>
                                </li>
                                <li><a>KNOW US</a></li>
                                <li><a>GET IN TOUCH</a></li>
                            </ul>
                            <div className='btn1'>
                                <Button>CONTACT Me</Button>
                            </div>
                        </div>
                    </div>
                    <div className='list'>
                       
                    </div>
                </Container>
            </section>
        </div>
    )
}
