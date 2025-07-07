import React, { useEffect } from 'react';
import '../estilos/estilos_musica.css';
import Navbar from '../components/navbar';
import { iniciarCarruselMusica } from '../funciones/musica'; 

function Musica() {
  useEffect(() => {
    iniciarCarruselMusica(); 
  }, []);

  return (
    <>
      <Navbar />

      <section className="musica">
        <h1>Música para concentrarme y relajarme</h1>
        <div className="intro">
          <p>
            La música siempre ha sido parte de mi rutina, especialmente cuando necesito concentrarme en proyectos o trabajos. Me ayuda a entrar en foco, relajarme y disfrutar el momento.
            Mis bandas favoritas son Imagine Dragons y me encanta el pop en inglés. También tengo canciones que nunca faltan en mi playlist, como "Lost on You" de LP, que tiene ese algo especial que me
            conecta cada vez que la escucho.
          </p>
          <img 
            src="/imagenes/hobbies/musica/portada_musica.png" 
            alt="portada musica" 
          />
        </div>
      </section>

      <section className="galeria_musica">
        <h2>Algunas de las canciones que escucho</h2>
        <div className="carrusel_musica">
          {[
            '7wtfhZwyrcc', // Believer
            'wDjeBNv6ip0', // Lost On You
            'mWRsgZuwf_8', // Demons
            'uuZE_IRwLNI', // Mirrors
            'MYSVMgRr6pw', // Take Me To Church
            'RBumgq5yVrA', // Let Her Go
            '8UVNT4wvIGY', // Somebody That I Used To Know
            'RB-RcX5DS5A', // The Scientist
          ].map((id, i) => (
            <a
              key={i}
              href={`https://www.youtube.com/watch?v=${id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={`canción ${i + 1}`} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Musica;
