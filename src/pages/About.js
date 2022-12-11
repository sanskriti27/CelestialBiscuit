import React from 'react';
import Stamp from '../assets/Stamp.png';
import grad from '../assets/Gradient.png';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import {Container} from 'react-bootstrap';
import MemberFill from '../Components/MemberFill'
import { Founders, Retrograde, Nebula, Quasars, Meridians, Martians} from '../data/Member'

function About() {
    return (
        <>
            <div className="about_heading">
                <div className="about_heading_content">
                    <img src={Stamp} alt='Stamp' className='stamp' />
                    <p className='about-title'>about <div className="line"></div></p>
                    <p style={{ textAlign: 'right', color: '#ECB440', fontSize: '2.5rem' }} className='cb'>CELESTIAL BISCUIT</p>
                    <p style={{ textAlign: 'right', color: '#ECB440', fontSize: '2.5rem' }} className='cb'>IGDTUW</p>
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
                    <img src={grad} alt='celestial biscuit'/>
                </div>
                {/* BLOCK 2 */}
                <div className='whatwedo-block2'>
                    <img src={grad} alt='Celestial biscuit'></img>
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
                        {/*  SMALL PARAGRAPH */}
                        <div className='whatwedo-block2-text-small'>
                            aim for advancement of <br/> the world through our <br/> technical prowess with <br/> every recruitment/<br/>action we perform.
                        </div>
                        {/* LINE */}
                        <div className='line2'></div>
                    </div>
                </div>
            </div>
            <Carousel />
            <div className='meettheteam container'>
                <div className='meettheteam-title'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p style={{ fontStyle: 'italic' }}>Meet the</p>
                        <div className='line-3'></div>
                    </div>
                    <p className='team'>TEAM</p>
                </div>
                <Container className='meettheteam-body'>
                    <p className='teamName'>FOUNDERS</p>
                    <MemberFill title={Founders}/>
                    <p className='teamName'>Nebula</p>
                    <MemberFill title={Nebula}/>
                    <p className='teamName'>Retrograde</p>
                    <MemberFill title={Retrograde}/>
                    <p className='teamName'>Quasars</p>
                    <MemberFill title={Quasars}/>
                    <p className='teamName'>Meridians</p>
                    <MemberFill title={Meridians}/>
                    <p className='teamName'>Martians</p>
                    <MemberFill title={Martians}/>
                </Container>
            </div>
            <Footer />
        </>

    );
}


export default About;
