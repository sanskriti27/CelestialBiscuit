import React from 'react'
import Nbar from './../Components/Nbar'
import Stamp from './../assets/Stamp.png'
import Pooja from './../assets/pooja.png'
import Gradient from './../assets/Gradient.png'
import Carousel from './../Components/Carousel'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <>
      <Nbar />
      <div className="photos">
        <div className="photos_row1">
          <div className="photos_row1_1">
            <div className="photos_row1_1_text">
              <img src={Stamp} alt="Stamp" className="photos_row1_1_circlelogo"/>
              <p style={{ color: 'white', fontSize: '3rem', fontFamily: "Montserrat" }}>WELCOME TO</p>
              <p style={{ fontSize: '4rem', color: '#ECB440' }}>CELESTIAL</p>
              <p style={{ fontSize: '4rem', color: '#ECB440' }}>BISCUIT</p>
              <p style={{ fontSize: '4rem', color: '#ECB440', display:'flex'}}>IGDTUW <div classNameName='line'></div></p>
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
              <p style={{ fontFamily: 'Montserrat', fontSize: '3rem', color: '#fff' }} >SOLUTIONS</p>
              <p style={{ fontFamily: 'Montserrat', fontSize: '3rem', color: '#fff' }} >THAT </p>
              <p style={{ fontFamily: 'Montserrat', fontSize: '3rem', color: '#fff' }} >INSPIRE</p>
            </div>
          </div>
          <div className="photos_row2_3">
            <div className="photos_row2_3_text">
              <p style={{ fontFamily: 'Montserrat', fontSize: '3rem', color: '#ECB440' }}>ROBUST</p>
              <p style={{ fontFamily: 'Montserrat', fontSize: '3rem', color: '#ECB440' }}>AESTHETIC</p>
              <p style={{ fontFamily: 'Montserrat', fontSize: '3rem', color: '#ECB440' }}>PRACTICAL</p>
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