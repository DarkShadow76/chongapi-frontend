import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '@/json/locations.json'

const Anfitrionas = (props) => {

  // Esto No funciona Solucionar a la brevedad
  const id = props.id

  /** No recibe la id correctamente */
  const club = data.find((club) => club.id === id);

  if (!club) {
    return <div>Club no encontrado: {props.id}</div>;
  }

  const anfitrionas = club['anfitrionas'];
  //

  return (
    <Container>
      <Row>
        {anfitrionas.map(item => (
          <Col xs={12} md={12} key={item.id}>
            <p>{item.alias}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Anfitrionas