import React, { useEffect, useRef } from 'react';
import '../estilos/estilos_lectura.css';
import Navbar from '../components/navbar';
import { activarScrollAutomatico } from '../funciones/lectura.js';

function Lectura() {
  const carruselRef = useRef(null);

  useEffect(() => {
    if (carruselRef.current) {
      const limpiar = activarScrollAutomatico(carruselRef.current);
      return limpiar; // para limpiar intervalos y listeners al desmontar
    }
  }, []);

  const libros = [
            "academia_de_vampiros.jpeg", "after.jpg", "agua_roja.jpg", "akelarre.jpg", "cada_dia.jpg",
            "cementerio_de_animales.jpeg", "el_año_del_verano_que_nunca_llego.jpg", "el_escultor_de_cadaveres.jpeg",
            "el_retrato_de_rose_madder.jpg", "el_secreto_de_tedd_y_todd.jpg", "el_visitante.jpg", "hush_hush.jpg",
            "it.jpg", "la_biblia_de_los_caidos.jpg", "la_chica_del_tren.jpg", "la_guerra_de_los_cielos.jpg",
            "la_melancolia_de_los_feos.jpg", "la_mujer_en_la_ventana.jpeg", "la_niebla.jpg",
            "la_prision_de_black_rock.jpg", "la_sangre_manda.jpg", "la_ultima_jugada.jpeg",
            "misery.jpeg", "orgullo_y_prejuicio.jpg", "padre_rico_padre_pobre.jpg",
            "sal_de_mis_sueños.jpg", "satanas.jpg"
  ];

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
          <img 
            src="/imagenes/hobbies/libros/lectura.jpg" 
            alt="portada libro" 
          />
        </div>
      </section>

      <section className="galeria_libros">
        <h2>Algunas de mis lecturas</h2>
        <div className="carrusel_libros" ref={carruselRef}>
          {libros.map((img, i) => (
            <img 
              key={i} 
              src={`/imagenes/hobbies/libros/${img}`} 
              alt={`libro ${i + 1}`} 
              title={img.replace(/_/g, ' ').replace(/\.[^/.]+$/, '')}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Lectura;
