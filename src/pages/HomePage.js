import React from 'react'
import Stamp from './../assets/Stamp.png'
import Pooja from './../assets/pooja.png'
import Gradient from './../assets/Gradient.png'
import Carousel from './../Components/Carousel'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <>
      <div className="photos">
        <div className="photos_row1">
          <div className="photos_row1_1">
            <div className="photos_row1_1_text">
              <img src={Stamp} alt="Stamp" className="photos_row1_1_circlelogo"/>
              <p className='welcome'>WELCOME TO</p>
              <p className='clubname'>CELESTIAL</p>
              <p className='clubname'>BISCUIT</p>
              <p className='clubname' style={{ display:'flex', alignItems:'center'}}>IGDTUW <div className='line'></div></p>
            </div>
          </div>
          <div className="photos_row1_2">
            <img src={Gradient} alt="" srcset="" style={{height: '100%', width:'100%', objectFit:'cover'}} />
          </div>
        </div>
        <div className="photos_row2">
          <div className="photos_row2_1">
            <img src={Pooja} style={{height: '100%', width: '100%', objectFit: 'cover'}} alt="" srcset="" />
          </div>
          <div className="photos_row2_2">
            <div className="photos_row2_2_text">
              <p>SOLUTIONS</p>
              <p>THAT </p>
              <p>INSPIRE</p>
            </div>
          </div>
          <div className="photos_row2_3">
            <div className="photos_row2_3_text">
              <p>ROBUST</p>
              <p>AESTHETIC</p>
              <p>PRACTICAL</p>
            </div>
          </div>
        </div>
      </div>
      <Carousel/>
      <Footer/>
    </>
  )
}

export default HomePage