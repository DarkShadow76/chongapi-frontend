"use client"
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

const Lateral = (props) => {

  return (
    <Container>
      <Row>
        <Col sm={8}>
          {/* Barra lateral */}
          <Navbar bg="dark" variant='dark' expand="sm" className="flex-column">
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
}

export default Lateral