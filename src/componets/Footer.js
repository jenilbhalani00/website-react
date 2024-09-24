import React from 'react'

export default function Footer() {
    return (
        <div >
            <section>
                <div className='row w-100 putter'>
                    <div className='col-lg-3 col-md-6 im-logo'>
                        {/* <img src={require('./assets/asset 1.png')}></img> */}
                        <p>Making the world a better place through<br></br>
                            constructing elegant hierarchies.</p>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <h4>Solutions</h4>
                        <li>marketing</li>
                        <li>marketing</li>
                        <li>marketing</li>
                        <li>marketing</li>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <h4>Support</h4>
                        <li>pricing</li>
                        <li>Documantion</li>
                        <li>Guides</li>
                        <li>Api stuts</li>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <h4>Subscribe</h4>
                        <p>Subscribe to our newsletter for the<br></br>
                            latest updates</p>
                        <input type='email'></input>
                    </div>
                </div>
            </section>
        </div>
    )
}
