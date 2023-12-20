"use client";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

const LateralBar = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Navbar
            style={{ borderRadius: "1rem" }}
            bg="dark"
            variant="dark"
            expand="sm"
            className="flex-column"
          >
            <Navbar.Brand href="/local">Locales</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#about">Acerca de</Nav.Link>
                <Nav.Link href="#contact">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default LateralBar;
