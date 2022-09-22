import React from 'react'
import Card from '../Components/Card'
import Nbar from '../Components/Nbar'
import Stamp from '../assets/Stamp.png'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'

const Project = () => {
  return (
    <>
      <div className='cont'>
        <div className='Main-1'>
          <div className='Hero'>
            <div className="hero-title-1">PROJECT <div></div><img src={Stamp} alt="Stamp"/></div>
            <div className='hero-title-2'>GALLERY</div>
          </div>
          <div className='grad'>
          </div>
        </div>
        <div className='Main-2'>
          <div></div>
          <div className='text'>
            <div>Imparting the essential knowledge and inspiration to burgeon rookies into proficient individuals</div>
          </div>
        </div>
      </div>
      <Carousel/>
      <div className='project-container'>
        <div className='inner-container'>
          <div>
            <div className='project-type'>WEB APPLICATIONS <div></div></div>
              <Card/>
          </div>
          <div>
              <div className='project-type'>MOBILE APPLICATTIONS <div></div></div>
              <Card/>
          </div>
          <div>
              <div className='project-type'>MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE <div></div></div>
              <Card/>
          </div>
          <div>
              <div className='project-type'>RESEARCH <div></div></div>
              <Card/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Project