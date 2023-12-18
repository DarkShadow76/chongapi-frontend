"use client"
import Container from 'react-bootstrap/Container';
import { Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import data from '@/json/locations.json'

const ListaLocales = (props) => {
  return (
    <Container>
      <Row>
        {data['locales'].map(item => (
          <Col xs={12} md={4}>
            <Card key={item.id} border='light' bg="dark" text="light" style={{ width: '18rem' }} className="mb-2">
              <Link href={`/local/${item.id}`}>
                <Card.Img variant="top" src={`${item.image_link}`} />
              </Link>
              <Card.Header style={{ textAlign: 'center' }}>{item.name}</Card.Header>
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