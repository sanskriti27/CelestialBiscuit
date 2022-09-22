import React from 'react'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import ClubPhoto from '../assets/ClubPhoto.png'
import Stamp from '../assets/Stamp.png'
import PhotoGrid from '../Components/PhotoGrid'

const Gallery = () => {
  return (
    <>
        <div className='cont'>
            <div className='Main-1 photo'>
                <div className='Hero'>
                    <div className="hero-title-1">PHOTO <div></div><img src={Stamp} alt="Stamp"/></div>
                    <div className='hero-title-2'>GALLERY</div>
                </div>
            </div>
            <div className='Main-2 photo'>
                <img src={ClubPhoto} alt="Biscuits"/>
            </div>
        </div>
        <div className='partition'></div>
        <PhotoGrid/>
        <Carousel/>
        <Footer/>
    </>
  )
}

export default Gallery