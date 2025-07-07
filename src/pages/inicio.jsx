import React from 'react';
import '../estilos/estilos.css'; 
import '../estilos/estilos_lectura.css';
import '../estilos/estilos_juegos.css';
import '../estilos/estilos_musica.css';
import '../estilos/estilos_deportes.css';
import Navbar from '../components/navbar';
import { validarContacto } from '../funciones/inicio.js';


function Inicio() {
  return (
    <>
    <Navbar />

      <section className="bienvenida">
        <h1>Bienvenido a mi sitio web personal</h1>
        <p>Aquí puedes conocer mi proyecto personal</p>
      </section>

      <section className="sobre_mi">
        <img src="/src/assets/inicio/mi_foto.jpg" alt="mi foto" className="foto_circular" />
        <div className="info">
          <h2>Sobre mí</h2>
          <p>
            Soy Yesenia Fernández, estudiante de la carrera técnica de Analista Programador.
            Me apasiona el mundo de la programación y disfruto aprender algo nuevo cada día.
            Tengo 22 años y me considero una persona perseverante, curiosa y dedicada.
            Cuando algo realmente me interesa, me enfoco al máximo en comprenderlo, dominarlo y crecer a partir de ello.
            Mi objetivo es seguir desarrollando habilidades tanto técnicas como personales, para contribuir de forma significativa en los proyectos que participe.
          </p>
        </div>
      </section>

      <section className="hobbies" id="hobbies">
        <div className="hobbies_grid">
          <div className="tarjeta">
            <img src="/src/assets/hobbies/libros/lectura.jpg" alt="Lectura" />
            <p><a href="#">Lectura</a></p>
          </div>
          <div className="intro_centrada">
            <h3>Mis hobbies, mis pasiones</h3>
            <p>Además del estudio y el trabajo, hay actividades que llenan mis días de energía, creatividad y equilibrio.  
            Aquí comparto algunos de mis hobbies, aquellos que me inspiran, me relajan y me conectan con lo que más disfruto hacer en mi tiempo libre.</p>
          </div>
          <div className="tarjeta">
            <img src="/src/assets/hobbies/juegos/juegos.jpeg" alt="Juegos" />
            <p><a href="#">Juegos</a></p>
          </div>
          <div className="tarjeta">
            <img src="/src/assets/hobbies/musica/musica.jpg" alt="Música" />
            <p><a href="#">Música</a></p>
          </div>
          <div className="tarjeta">
            <img src="/src/assets/hobbies/deportes/trekking.jpg" alt="Deportes" />
            <p><a href="#">Deportes</a></p>
          </div>
        </div>
      </section>

      <section id="estudios" className="estudios">
        <div className="texto">
          <p className="carrera">Analista programador</p>
          <h4>Mi camino en el mundo del conocimiento</h4>
          <p>Mi formación ha sido una mezcla de creatividad y tecnología. Comencé estudiando Diseño e Integración Multimedia, donde aprendí sobre diseño de logos, 
            páginas web, edición de video, uso de pantalla verde y otros aspectos del mundo audiovisual. Luego decidí explorar más el área técnica a través de un 
            curso de programación con Arduino, motivada por mi interés constante en la informática. Actualmente estoy estudiando la carrera de Analista Programador, 
            con la meta de seguir avanzando hacia la Ingeniería Informática. Cada paso ha sido una oportunidad para descubrir nuevas habilidades y seguir creciendo 
            profesionalmente.</p>
        </div>
        <img src="/src/assets/tecnologia.jpg" alt="fondo tecnología" />
      </section>

      <section id="contacto" className="seccion_contacto">
        <h2>Contáctame</h2>
        <p>¿Quieres agendar una cita, cotizar un servicio o simplemente saludarme?</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          validarContacto();
        }}>
          <input type="text" id="nombre" placeholder="Tu nombre" />
          <input type="email" id="correo" placeholder="Tu correo" />
          <textarea id="mensaje" placeholder="Tu mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}

export default Inicio;
