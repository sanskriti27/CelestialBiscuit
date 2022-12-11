import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, NavLink } from "react-bootstrap";
import { useLocation } from "react-router";
import { Drawer, useMediaQuery } from "@mui/material";
import Subscribe from "./Subscribe";

const Nbar = () => {
  const location = useLocation();
  const matches = useMediaQuery("(max-width:767px)");
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container className="nav">
          <img src={logo} alt="Celestial Biscuit IGDTUW" className="logo" />

          {matches ? (
            <>
              <div className="nav-button-mobile">
                {open ? (
                  <FontAwesomeIcon
                    icon="fa-solid fa-xmark"
                    onClick={() => setOpen(false)}
                    className="cross-mark-nav"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="fa-solid fa-bars"
                    onClick={() => setOpen(true)}
                  />
                )}
              </div>

              <div
                className="full-screen-nav"
                style={{
                  height: open ? "100vh" : "0px",
                }}
              >
                <Nav className="navbox-mobile" activeKey={location.pathname}>
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
              </div>
            </>
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
              <Nav>
              {/* <Button className="subscribe" variant="primary" onClick={() => setModalShow(true)}>
                  Subscribe
                </Button> */}

                <Subscribe 
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />

              </Nav>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Nbar;
