import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../json/locations.json'


const Entitys = () => {
return (
    <Container>
        <Row>
            {data.map(item => (
                <Col key = {item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.capacity}</p>
                    <p>{item.description}</p>
                </Col>
            ))}
        </Row>
    </Container>
);
}

export default Entitys