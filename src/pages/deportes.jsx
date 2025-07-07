import React, { useEffect } from 'react';
import '../estilos/estilos.css';
import Navbar from '../components/navbar';
import { iniciarCarruselDeportes } from '../funciones/deportes'; // 👈

function Deportes() {
  useEffect(() => {
    iniciarCarruselDeportes(); // 👈
  }, []);

  return (
    <>
      <Navbar />
      <section className="deportes">    
        <h1>Moverme es mi manera de vivir</h1>
        <div className="intro">
          <p>
            Aunque no lo practico todos los días, siempre que tengo la oportunidad disfruto moverme y conectar con el entorno a través del deporte.
            Me encanta caminar, hacer trekking, probar deportes extremos o simplemente ejercitarme para liberar energía. A lo largo de mi vida he 
            experimentado distintos tipos de deportes, y cada uno ha sido una forma distinta de disfrutar, aprender y desafiarme.
          </p>
          <img src="/imagenes/hobbies/deportes/ejercicio.jpg" alt="ejercicio" />
        </div>
      </section>  

      <section className="galeria_deportes">
        <h2>Algunos de los deportes que he practicado</h2>
        <div className="carrusel_deportes">
          <img src="/imagenes/hobbies/deportes/caminar.jpg" alt="trekking" />
          <img src="/imagenes/hobbies/deportes/cannopi.jpg" alt="cannopi" />
          <img src="/imagenes/hobbies/deportes/cuerda.jpg" alt="cuerda" />
          <img src="/imagenes/hobbies/deportes/kayak.jpg" alt="kayak" />
          <img src="/imagenes/hobbies/deportes/parapente.jpg" alt="parapente" />
          <img src="/imagenes/hobbies/deportes/ciclismo.jpg" alt="ciclismo" />
          <img src="/imagenes/hobbies/deportes/natacion.jpg" alt="natacion" />
          <img src="/imagenes/hobbies/deportes/patinaje.jpg" alt="patinaje" />
        </div>
      </section>
    </>
  );
}

export default Deportes;
