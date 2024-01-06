"use client";
import { useState, useRef } from 'react';
import { Button, Container, Image, Row, Col, Overlay } from "react-bootstrap";

const perfil = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <Container>
      <div><p>Publicidad Aqui</p></div>
      <h2>Perfil de John Doe</h2>
      <Row>
        <Col xs={6} md={6}>
          <Image />
          <h5>Imagen</h5>
          <h6>Kines recomendadas:</h6>
          <li>Local "Local 1" - "Diana" - Cuarto #4</li>
          <li>Local "Local 2" - Chica "Carla" - Cuarto #16</li>
          <h5>Favoritas</h5>
          <li>La Chica "Andrea" de "Local 2"  se fue al local "Local 3" con el nombre "Cindy" en el cuarto 45</li>
        </Col>
        <Col xs={6} md={6}>
          <Col xs={4} md={2}>
            <Row>
              <Button variant="primary" ref={target} onClick={() => setShow(!show)}>Ver Saldo</Button>
              <Overlay target={target.current} show={show} placement="right">
                {({
                  placement: _placement,
                  arrowProps: _arrowProps,
                  show: _show,
                  popper: _popper,
                  hasDoneInitialMeasure: _hasDoneInitialMeasure,
                  ...props
                }) => (
                  <div
                    {...props}
                    style={{
                      position: 'absolute',
                      backgroundColor: 'rgba(255, 100, 100, 0.85)',
                      padding: '2px 10px',
                      color: 'white',
                      borderRadius: 3,
                      ...props.style,
                    }}
                  >
                    45PEN
                  </div>
                )}
              </Overlay>
              <Button variant="success"></Button>
            </Row>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default perfil;