"use client";
import React, { useState } from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (section) => {
    setActiveSection(section);
    //alert(`${section}`)
  };

  return (
    <header>
      <Navbar
        expand="sm"
        className={`bg-body-tertiary Navbar ${activeSection === "home" ? "home-active" : ""
          }`}
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Container className="container-nav">
          <Navbar.Brand href="/">ChongApi</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/home" onClick={() => handleNavClick("home")}>
                Home
              </Nav.Link>
              <Nav.Link href="/about" onClick={() => handleNavClick("about")}>
                About
              </Nav.Link>
              <Nav.Link href="/local" onClick={() => handleNavClick("Locales")}>
                Locales
              </Nav.Link>
              <Nav.Link href="/review" onClick={() => handleNavClick("review")}>
                Review
              </Nav.Link>
              <NavDropdown
                title="Servicios"
                id="nav-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action3">Ofertas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Locales</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">YOLO</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Button href="/login/signin" style={{ alignContent: "right" }} variant="outline-primary">
              Sig Up
            </Button>{' '}
            <Button href="/login" style={{
              alignContent: "right",
              marginLeft: "1%"
            }} variant="outline-success">
              Log in
            </Button>{' '}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
