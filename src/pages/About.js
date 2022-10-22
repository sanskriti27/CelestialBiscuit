import React from 'react'
import Stamp from '../assets/Stamp.png'
import grad from '../assets/Gradient.png'
import Pooja from '../assets/pooja.png'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'


function About() {
    return (
        <>
            <div className="about_heading">
                <div className="about_heading_content">
                    <img src={Stamp} alt='Stamp' style={{ position: 'absolute', top: '13%', right: '30%' }} />
                    <p className='about-title'>about <div className="line"></div></p>
                    <p style={{ textAlign: 'right', color: '#ECB440', fontSize: '2.5rem' }}>CELESTIAL BISCUIT</p>
                    <p style={{ textAlign: 'right', color: '#ECB440', fontSize: '2.5rem' }}>IGDTUW</p>
                </div>
            </div>
            <div className="about_photos">
                <div className="about_photos1">

                </div>
                <div className="checkerboard">

                </div>
                <div className="about_photos_1 block1">
                    <div className="about_photos1_text">
                        <div>CHISELLING YOUNG </div>
                        <div>MINDS TO NURTURE</div>
                        <div>THE WORLD'S</div>
                        <div>PROBLEMS AND NOT</div>
                        <div>THE OPPOSITE</div>
                    </div>
                </div>
                <div className="about_photos_1 block2">
                    <div className="about_photos1_text">
                        <div>ALIGNING THE</div>
                        <div>STARS IN YOUR</div>
                        <div>UNIVERSE TO</div>
                        <div>SPELL</div>
                        <div>EXCELLENCE</div>
                    </div>
                </div>
            </div>
            <div className="whatwedo">
                {/* TITLE */}
                <div className="whatwedo-title">
                    <p>WHAT WE DO</p>
                </div>
                {/* BLOCK 1 */}
                <div className='whatwedo-block1'>
                    <div className='whatwedo-block1-text'>
                        <div className='whatwedo-block1-text-heading'>
                            <p>EVOLVING YOUNG</p>
                            <p style={{ color: '#ECB440', marginLeft: '2%' }}>GIRLS</p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', height: '80%', width: '100%' }}>

                            <div className='vertical-line'></div>

                            <div className='whatwedo-block1-text-content'>
                                <div className='sentences'> 
                                <p className='i end'>into assertive</p> <p className='highlight' style={{ marginLeft: '2%' }} >WOMEN</p> 
                                </div>
                                <div className='sentences'> <p className='i end'> adept at </p> <p className='highlight' style={{ marginLeft: '2%' }}>LEADING</p> <p className='i end' style={{ marginLeft: '2%' }}>through</p></div>
                                <div className='sentences'> <p className='highlight' style={{ marginLeft: '2%' }}>INSPIRING </p> <p style={{ marginLeft: '2%' }} className='i end'>conceptions and</p></div>
                                <div className='sentences'> <p className='i end'>gestures.</p></div>

                            </div>

                        </div>
                    </div>
                    <img src={grad} alt='celestial biscuit' />
                </div>
                {/* BLOCK 2 */}
                <div className='whatwedo-block2'>
                    <img src={grad} alt='Celestial biscuit' style={{ width: '40%' }}></img>
                    <div className='whatwedo-block2-text'>
                        {/* LARGE content */}
                        <div className='whatwedo-block2-text-large'>
                            <div className='sentences'>
                                <p className='i'>aiding</p>
                                <p style={{ marginLeft: '2%' }} className='highlight'>HARDWORK</p>
                                <p style={{ marginLeft: '2%' }} className='i'>with the</p></div>
                            <div style={{ justifyContent: 'center' }} className='sentences'>
                                <p className='i'>correct</p>
                                <p style={{ marginLeft: '2%', color: 'white' }} className='highlight'>GUIDANCE</p>
                            </div>
                            <div className='sentences'>
                                <p className='i'>We at</p>
                                <p style={{ marginLeft: '2%' }} className='highlight'>CELESTIAL</p>
                            </div>
                            <div style={{ justifyContent: 'center' }} className='sentences'>
                                <p className='highlight'>BISCUIT</p>
                                <p style={{ marginLeft: '2%', color: 'white' }} className='highlight'>IGDTUW</p></div>
                        </div>
                        {/* SMALL PARAGRAPH */}
                        <div className='whatwedo-block2-text-small'>
                            aim for advancement of the world through our technical prowess with every recruitment/action we perform.
                        </div>
                        {/* LINE */}
                        <div className='line2'></div>
                    </div>
                </div>
            </div>
            <Carousel />
            <div className='meettheteam'>
                <div className='meettheteam-title'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p style={{ fontStyle: 'italic' }}>Meet the</p>
                        <div className='line-3'></div>
                    </div>
                    <p style={{ fontSize: '3.5rem', fontFamily: 'Equinox', color: '#ECB440' }}>TEAM</p>
                </div>
                <div className='meettheteam-body'>
                    <div style={{ backgroundImage: `url(${Pooja})` }} className='founder-card'>
                        <div className='founder-name'>
                            <p style={{ color: '#ECB440', fontFamily: 'Montserrat', marginBottom: '2%' }}><strong>POOJA GERA</strong></p>
                            <p>FOUNDER</p>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Pooja})` }} className='founder-card'>
                        <div className='founder-name'>
                            <p style={{ color: '#ECB440', fontFamily: 'Montserrat', marginBottom: '2%' }}> <strong>POOJA GERA</strong> </p>
                            <p>FOUNDER</p>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Pooja})` }} className='founder-card'>
                        <div className='founder-name'>
                            <p style={{ color: '#ECB440', fontFamily: 'Montserrat', marginBottom: '2%' }}><strong>POOJA GERA</strong></p>
                            <p>FOUNDER</p>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Pooja})` }} className='founder-card'>
                        <div className='founder-name'>
                            <p style={{ color: '#ECB440', fontFamily: 'Montserrat', marginBottom: '2%' }}><strong>POOJA GERA</strong></p>
                            <p>FOUNDER</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}


export default About;