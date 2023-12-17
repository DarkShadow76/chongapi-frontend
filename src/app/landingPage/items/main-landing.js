import Header from '@/components/Header';
import Styles from './main-landing.modules.css';
import Imagen from '../../../../public/imagen.jpg';

const MainLandingPage = () => {
  return (
    <main>
      <Header/>
      <h3 className={Styles.h3}>Infórmate de los mejores puntos para divertite</h3>
      <h5 className={Styles.h5}>Más de 100 negocios en todo la costa confían en nosotros.</h5>
      {/*Imagen grande */}
      <image src = '../../../../public/imagen.jpg'/>
      {/*Mostrar 3 beneficios de la página icono, titulo <h3>, descripcion <p>*/}
      {/*Mostra los socios que tenemos "logo del local" */}
      <h6 className={Styles.h6}>ChongApi la mejor plataforma para brindarte información sobre tus anfitrionas</h6>
    </main>
  )
}

export default MainLandingPage;