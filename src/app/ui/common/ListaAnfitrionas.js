"use client"
import { Card, Col, Row, Container } from 'react-bootstrap';
import data from '@/json/locations.json'

const ListaAnfitrionas = (props) => {

  const id = props.id - 1

  const localtest = data['locales'][`${id}`]['anfitrionas']

  return (
    <Container>
      <Row>
        {localtest.map(item => (
          <Col xs={12} md={6} key={item.id} lg>
            <Card key={item.id} border='light' bg="dark" text="light" style={{ width: '18rem' }} className="mb-2">
              <Card.Body>
                <Card.Title><h5><strong>{item.alias}</strong></h5></Card.Title>
                <Card.Text>
                  <h6>{item.nacionalidad} </h6>
                  <h6>Cuarto N°: {item.cuarto}</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListaAnfitrionas