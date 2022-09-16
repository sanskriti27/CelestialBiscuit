import React from 'react'
import FooterStamp from '../assets/Footer-Stamp.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
        <div className='footer-container'>
            <div className='left'>
                <div>Follow Us:</div>
                <div className="footer-icons">
                <div className="social"><a href="https://twitter.com/cbigdtuw" > <FontAwesomeIcon icon="fa-brands fa-twitter" className="icon" /></a></div>
                <div className="social"><a href="https://www.instagram.com/celestialbiscuit/" > <FontAwesomeIcon icon="fa-brands fa-instagram" className="icon"/></a></div>
                <div className="social"><a href="https://www.linkedin.com/company/celestial-biscuit-igdtuw/" > <FontAwesomeIcon icon="fa-brands fa-linkedin" className="icon"/></a></div>  
                </div>
            </div>
            <div className='right'>
                <a href='mailto:celestialbiscuit0.0@gmail.com'><img src={FooterStamp} alt="Get In Touch"/></a>
            </div>
        </div>
        <div className='credit'>
            CELESTIAL BISCUIT IGDTUW ⓒ 2022
        </div>
    </>
  )
}

export default Footer