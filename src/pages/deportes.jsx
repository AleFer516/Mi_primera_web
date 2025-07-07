import React from 'react';
import '../estilos/estilos.css';
import Navbar from '../components/navbar';

function Deportes() {
  return (
    <>
      <Navbar />

      <section className="seccion_deportes">
        <div className="texto_centrado">
          <h1>Mi lado activo</h1>
          <p>
            Aunque no lo practico todos los días, siempre que tengo la oportunidad disfruto moverme y conectar con el entorno a través del deporte.
            Me encanta caminar, hacer trekking, probar deportes extremos o simplemente ejercitarme para liberar energía. A lo largo de mi vida he 
            experimentado distintos tipos de deportes, y cada uno ha sido una forma distinta de disfrutar, aprender y desafiarme.
          </p>
        </div>

        <div className="galeria_trekking">
          <img src="/src/assets/hobbies/deportes/trekking1.jpg" alt="Trekking 1" />
          <img src="/src/assets/hobbies/deportes/trekking2.jpg" alt="Trekking 2" />
          <img src="/src/assets/hobbies/deportes/trekking3.jpg" alt="Trekking 3" />
          <img src="/src/assets/hobbies/deportes/trekking4.jpg" alt="Trekking 4" />
        </div>
      </section>
    </>
  );
}

export default Deportes;
