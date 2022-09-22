import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../assets/Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nbar = (props) => {

  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="lg" >
        <Container className="nav">
          <img src={logo} alt="Celestial Biscuit IGDTUW" className="logo"/>
            <Nav className="navbox" variant="pills" >
              <Nav.Link href="/"  className="link" >HOME</Nav.Link>
              <Nav.Link href="/Project" className="link" >PROJECTS</Nav.Link>
              <Nav.Link href="/Gallery" className="link" >GALLERY</Nav.Link>
              <Nav.Link href="/About" className="link" >ABOUT</Nav.Link>
            </Nav>
            <Nav className="NavSocials">
              <div className="social"><a href="https://twitter.com/cbigdtuw"  target="_blank" rel="noopener noreferrer" > <FontAwesomeIcon icon="fa-brands fa-twitter" className="icon" /></a></div>
              <div className="social"><a href="https://www.instagram.com/celestialbiscuit/"   target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon="fa-brands fa-instagram" className="icon"/></a></div>
              <div className="social"><a href="https://www.linkedin.com/company/celestial-biscuit-igdtuw/"  target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon="fa-brands fa-linkedin" className="icon"/></a></div>  
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nbar;
