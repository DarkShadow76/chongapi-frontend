import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '@/json/locations.json'

const Anfitrionas = (props) => {

  const id = props.id-1

  //var json = JSON.parse(data);

  /** No recibe la id correctamente */
  //const local = data['locales'].find((locales) => locales.id === id);
  const localtest = data['locales'][`${id}`]['anfitrionas']

  /*
  if (!local) {
    return <div>Club no encontrado: {props.id}</div>;
  }

  const anfitrionas = local['anfitrionas'];
  */

  return (
    <Container>
      <Row>
        {localtest.map(item => (
          <Col xs={12} md={6} key={item.id}>
            <h5><strong>{item.alias}</strong></h5>
            <h6>{item.nacionalidad} </h6>
            <h6>Cuarto: {item.cuarto}</h6>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Anfitrionas