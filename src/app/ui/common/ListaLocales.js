"use client"
import Container from 'react-bootstrap/Container';
import { Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import data from '@/json/locations.json'

const ListaLocales = (props) => {
  return (
    <Container className="album py-5 bg-light">
      <Row xs={1} sm={2} md={3} className='g-3'>
        {data['locales'].map(item => (
          <Col>
            <Card key={item.id} border='light' bg="dark" text="light" className="mb-2">
              <Link href={`/local/${item.id}`}>
                <Card.Img variant="top" src={`${item.image_link}`} />
              </Link>
              <h3>
                <Card.Header style={{ textAlign: 'center' }}>
                  <strong>{item.name}</strong>
                </Card.Header>
              </h3>
              <Card.Body>
                <Card.Title>Anfitrionas: {item.capacity}</Card.Title>
                <Card.Text>Dirección: {item.location}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListaLocales