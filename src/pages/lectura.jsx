import React from 'react';
import '../estilos/estilos_lectura.css';
import Navbar from '../components/navbar';

function Lectura() {
  return (
    <>
      <Navbar />

      <section className="lectura">
        <h1>Leer para Sentir, Viajar y Aprender</h1>
        <div className="intro">
          <p>
           La lectura ha sido una de mis pasiones más constantes. A lo largo de los años he leído más de 100 libros de géneros distintos, 
            desde terror y fantasía hasta novelas históricas y literatura contemporánea. Cada historia me ha dejado una huella distinta, 
            pero algunas han marcado un antes y un después en mi forma de ver el mundo como "It","La biblia de los caidos”, El año del 
            verano que nunca llego”,” La niña alemana". Para mi leer no es solo un pasatiempo, es una forma de viajar, de aprender y de 
            conectar con emociones profundas.
          </p>
          <img src="/src/assets/libros/la biblia de los caidos.jpg" alt="portada libro" />
        </div>
      </section>

      <section className="galeria_libros">
        <h2>Algunas de mis lecturas</h2>
        <div className="carrusel_libros">
          {[
            "academia de vampiros.jpeg", "after.jpg", "agua roja.jpg", "akelarre.jpg", "cada dia.jpg",
            "cementerio de animales.jpeg", "el año del verano que nunca llego.jpg", "el escultor de cadaveres.jpeg",
            "el retrato de rose madder.jpg", "el secreto de  tedd y todd.jpg", "el visitante.jpg", "hush hush.jpg",
            "it.jpg", "la biblia de los caidos.jpg", "la chica del tren.jpg", "la guerra de los cielos.jpg",
            "la melancolia de los feos.jpg", "la mujer en la ventana.jpeg", "la niebla.jpg",
            "la prision de black rock.jpeg", "la sangre manda.jpg", "la ultima jugada.jpeg",
            "misery.jpeg", "orgullo_y_prejuicio.jpg", "padre rico padre pobre.jpg",
            "sal de mis sueños.jpg", "satanas.jpg"
          ].map((img, i) => (
            <img key={i} src={`/src/assets/libros/${img}`} alt={`libro ${i + 1}`} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Lectura;
