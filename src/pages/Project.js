import React from 'react'
import Stamp from '../assets/Stamp.png'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import { webApp, ML, mobileApp, research, bot } from '../data/Project'
import CardFill from '../Components/CardFill'


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
              <CardFill   theme={webApp}/>
          </div>
          <div>
              <div className='project-type'>MOBILE APPLICATTIONS <div></div></div>
              <CardFill theme={mobileApp}/>
          </div>
          <div>
              <div className='project-type'>MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE <div></div></div>
              <CardFill theme={ML}/>
          </div>
          <div>
              <div className='project-type'>RESEARCH <div></div></div>
              <CardFill theme={research}/>
          </div>
          <div>
              <div className='project-type'>BOT <div></div></div>
              <CardFill theme={bot} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Project