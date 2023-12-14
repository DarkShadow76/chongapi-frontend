import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary Navbar" bg="dark" variant="dark" fixed="top">
        <Container className="container-nav">
          <Navbar.Brand href="/">ChongApi</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="#" className="nav-item active" disabled>Support
              </Nav.Link>
              <Nav.Link href="#">Review
              </Nav.Link>
              <NavDropdown title="Servicios" id="nav-dropdown" menuVariant="dark">
                <NavDropdown.Item href="#action3" >
                  Ofertas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Locales
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  YOLO
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h2 style={{
        marginTop: "5rem",
        alignContent: "revert"
      }}>{props.titulo}</h2>
    </>
  );
}

export default Header