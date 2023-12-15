import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import data from '@/json/locations.json'

const Entitys = (props) => {
  return (
    <Container>
      <Row>
        {data.map(item => (
          <Col xs={12} md={4}>
            <Card border='light' key={item.id} bg="dark" text="light" style={{ width: '18rem' }} className="mb-2">
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

export default Entitys