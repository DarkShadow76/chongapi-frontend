import Header from '@/components/Header';
import { Image, Col, Row } from 'react-bootstrap';
import Styles from './main-landing.modules.css';
import Imagen from '@/public/imagen.jpg';

const MainLandingPage = () => {
  return (
    <main>
      <Header />
      <Row>
        <Col xs={12} md={6}>
          <h3 className={Styles.h3}>Infórmate de los mejores puntos para divertite</h3>
          <h5 className={Styles.h5}>Más de 100 negocios en todo la costa confían en nosotros.</h5>
          <Image className='image' src="https://peru21.pe/resizer/rW0neezFs8wc0QM9JUHIZXf-DQI=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YY5FXW5DLRCYRMJOIT54J4AL3M.jpg" thumbnail />
        </Col>
        <Col xs={12} md={6} style={{ marginBottom: "5rem" }}>
          <h3 className={Styles.h3}>ChongAPI es tu guia para el mundo Chongueril</h3>
          <Image className="image" src="https://cdn.www.gob.pe/uploads/document/file/3212701/standard_15.jpg.jpg" rounded />
        </Col>
        {/*Imagen grande */}
        {/*Mostrar 3 beneficios de la página icono, titulo <h3>, descripcion <p>*/}
        {/*Mostra los socios que tenemos "logo del local" */}
        <Col>
          <h6 className={Styles.h6}>ChongApi la mejor plataforma para brindarte información sobre tus anfitrionas</h6>
        </Col>
      </Row>
    </main>
  )
}

export default MainLandingPage;