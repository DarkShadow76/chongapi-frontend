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
            {/* Beneficio 1 */}
          </div>
          <div>
            {/* Beneficio 2 */}
          </div>
          <div>
            {/* Beneficio 3 */}
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