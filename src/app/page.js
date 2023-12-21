import style from './ui/globals.css';
import { Image } from 'react-bootstrap';

export default function Page() {
  return (
    <main className={style.main}>
      <section>
        <div className={style.container}>
          <h2>Infórmate de los mejores puntos para divertite</h2>
          <p>Más de 100 negocios en todo la costa confían en nosotros.</p>
        </div>
      </section>
      <section>
        <Image src='https://img.freepik.com/psd-gratis/marcos-fotos-maqueta_53876-57741.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1703116800&semt=ais' alt='foto' width={720} height={400}/>
        {/* Insertar imagen en formato <Image/> */}
        <div className={style.containerGrid}>
          <div>
            {/* Beneficio 1 Imagen*/}
            <h2>Conocelas sin compromiso</h2>
            <p>Te invitamos a explorar todas las opciones disponibles antes de tomar una decisión.</p>
          </div>
          <div>
            {/* Beneficio 2 */}
            <h2>Horarios actualizados 24/7</h2>
            <p>Disfruta de la flexibilidad de acceder a nuestros servicios en cualquier momento los 7 días de la semana.</p>
          </div>
          <div>
            {/* Beneficio 3 */}
            <h2>Seguridad y discreción</h2>
            <p>Tu confianza es nuestra prioridad, y trabajamos diligentemente para ofrecerte un entorno seguro, confidencial y transparente.</p>
          </div>
        </div>
      </section>
      <div className={style.containerGrid2}>
        {/* Agregar marcas */}
      </div>
      <section>
        {/* Agregar FAQs */}
        <div>
          <h2><strong>FAQ</strong></h2>
        </div>
      </section>
    </main>
  )
}