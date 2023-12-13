import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import data from '../json/locations.json'

const Entitys = () => {
    return (
        <Container>
        <Row>
            {data.map(item => (
            <Col>
                <Card key={item.id} bg="dark" text="light" style={{ width: '18rem' }} className="mb-2">
                <Card.Header style={{ textAlign: 'center' }}>{item.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Capacity: {item.capacity}</Card.Title>
                    <Card.Text>{item.location}</Card.Text>
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