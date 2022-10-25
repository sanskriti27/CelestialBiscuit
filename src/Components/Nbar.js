import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-bootstrap";
import { useLocation } from "react-router";
import { useMediaQuery } from "@mui/material";

const Nbar = () => {
  const location = useLocation();
  const matches = useMediaQuery("(max-width:786px)");
  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container className="nav">
          <img src={logo} alt="Celestial Biscuit IGDTUW" className="logo" />

          {matches ? (
            <div className="nav-button-mobile">
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </div>
          ) : (
            <>
              <Nav
                className="navbox"
                variant="pills"
                activeKey={location.pathname}
              >
                <NavLink href="/" className="link">
                  HOME
                </NavLink>
                <NavLink href="/Project" className="link">
                  PROJECTS
                </NavLink>
                <NavLink href="/Gallery" className="link">
                  GALLERY
                </NavLink>
                <NavLink href="/About" className="link">
                  ABOUT
                </NavLink>
              </Nav>
              <Nav className="NavSocials">
                <div className="social">
                  <a
                    href="https://twitter.com/cbigdtuw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon="fa-brands fa-twitter"
                      className="icon"
                    />
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://www.instagram.com/celestialbiscuit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon="fa-brands fa-instagram"
                      className="icon"
                    />
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://www.linkedin.com/company/celestial-biscuit-igdtuw/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon="fa-brands fa-linkedin"
                      className="icon"
                    />
                  </a>
                </div>
              </Nav>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Nbar;
