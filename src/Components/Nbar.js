import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../assets/Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nbar = (location) => {
  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="lg" >
        <Container className="nav">
          <img src={logo} alt="Celestial Biscuit IGDTUW" className="logo"/>
            <Nav className="navbox" variant="pills" >
              <Nav.Link href="/" className="link">HOME</Nav.Link>
              <Nav.Link href="#link" className="link" >PROJECTS</Nav.Link>
              <Nav.Link href="#link" className="link" >GALLERY</Nav.Link>
              <Nav.Link href="#link" className="link" >ABOUT</Nav.Link>
            </Nav>
            <Nav className="NavSocials">
              <div className="social"><a href="https://twitter.com/cbigdtuw" > <FontAwesomeIcon icon="fa-brands fa-twitter" className="icon" /></a></div>
              <div className="social"><a href="https://www.instagram.com/celestialbiscuit/" > <FontAwesomeIcon icon="fa-brands fa-instagram" className="icon"/></a></div>
              <div className="social"><a href="https://www.linkedin.com/company/celestial-biscuit-igdtuw/" > <FontAwesomeIcon icon="fa-brands fa-linkedin" className="icon"/></a></div>  
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nbar;
