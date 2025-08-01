import React, { useEffect } from 'react';
import '../estilos/estilos_juegos.css';
import Navbar from '../components/navbar';
import { iniciarCarruselJuegos } from '../funciones/juegos';

function Juegos() {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow || 'auto';
    };
  }, []);

  useEffect(() => {
    iniciarCarruselJuegos();
  }, []);

  return (
    <>
      <Navbar />
      <section className="seccion_gamer">
        <div className="texto_centrado">
          <h1>Mi lado gamer</h1>
          <p>
            Jugar es una de las formas que tengo para desconectarme y pasarlo bien. Valorant es mi favorito: no solo me entretiene, sino que también me da la oportunidad de 
            compartir momentos con amigos. Cuando tengo más tiempo libre, me gusta explorar juegos de historia o simuladores, donde puedo perderme en mundos distintos y 
            probar nuevas experiencias.
          </p>
        </div>

        <div className="carrusel_juegos">
          {[
            { nombre: 'a_little_to_the_left.jpg', url: 'https://en.wikipedia.org/wiki/A_Little_to_the_Left' },
            { nombre: 'astroneer.jpg', url: 'https://en.wikipedia.org/wiki/Astroneer' },
            { nombre: 'dbd.jpeg', url: 'https://en.wikipedia.org/wiki/Dead_by_Daylight' },
            { nombre: 'human_fall_flat.jpg', url: 'https://en.wikipedia.org/wiki/Human:_Fall_Flat' },
            { nombre: 'minecraft.jpg', url: 'https://en.wikipedia.org/wiki/Minecraft' },
            { nombre: 'pummel.jpeg', url: 'https://store.steampowered.com/app/880940/Pummel_Party/?l=spanish' },
            { nombre: 'satisfactory.jpeg', url: 'https://en.wikipedia.org/wiki/Satisfactory' },
            { nombre: 'strandeed_dep.jpeg', url: 'https://store.steampowered.com/app/313120/Stranded_Deep/?l=spanish' },
            { nombre: 'subnautica.jpg', url: 'https://en.wikipedia.org/wiki/Subnautica' },
            { nombre: 'the_forest.jpg', url: 'https://store.steampowered.com/app/242760/The_Forest/?l=spanish' },
          ].map((juego, i) => (
            <a key={i} href={juego.url} target="_blank" rel="noopener noreferrer">
              <img src={`/imagenes/hobbies/juegos/${juego.nombre}`} alt={`juego ${i + 1}`} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Juegos;
