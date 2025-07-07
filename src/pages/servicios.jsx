import React, { useState } from 'react';
import '../estilos/estilos_servicios.css';
import Navbar from '../components/navbar';

function Servicios() {
  const [detalles, setDetalles] = useState({
    manicure: false,
    ropa: false,
    streaming: false,
  });

  const toggleDetalles = (servicio) => {
    setDetalles((prev) => ({
      ...prev,
      [servicio]: !prev[servicio],
    }));
  };

  return (
    <>
      <Navbar />

      <main className="servicios">
        <h2>Mis servicios</h2>
        <p className="intro_servicios">
          Me considero una mujer emprendedora, proactiva y con una gran motivación por aprender constantemente. Además de 
          desarrollar mis habilidades en el área de la programación, también me dedico con entusiasmo a ofrecer distintos servicios que reflejan mi compromiso, creatividad y espíritu independiente.
          A través de estas actividades, no solo impulso mi crecimiento personal y profesional, sino que también busco entregar valor y calidad en cada experiencia que ofrezco.
        </p>

        <section className="servicios_grid">
          {/* Manicurista */}
          <div className="tarjeta servicio">
            <img src="/imagenes/servicios/uñas.jpg" alt="Manicurista" />
            <p><strong>Manicurista</strong></p>
            <p>Servicios de manicure profesional con diseños personalizados.</p>
            <button onClick={() => toggleDetalles('manicure')}>Conocer más</button>
            {detalles.manicure && (
              <div className="detalles_servicio">
                <h4>Precios</h4>
                <ul>
                  <li>Manicure tradicional: $12.000</li>
                  <li>Decoración con diseño desde: $15.000</li>
                  <li>Esmaltado permanente: $13.000</li>
                  <li>Sistema de extensión desde: $25.000</li>
                </ul>
                <h4>Galería</h4>
                <div className="galeria">
                  {[1, 2, 3, 4].map((n) => (
                    <img key={n} src={`/imagenes/servicios/uñas${n}.jpg`} alt={`Uñas diseño ${n}`} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Ropa Online */}
          <div className="tarjeta servicio">
            <img src="/imagenes/servicios/ropa.jpg" alt="Ropa online" />
            <p><strong>Ropa Online</strong></p>
            <p>Venta de ropa por catálogo digital. Moda urbana y femenina.</p>
            <button onClick={() => toggleDetalles('ropa')}>Conocer más</button>
            {detalles.ropa && (
              <div className="detalles_servicio">
                <h4>Precios</h4>
                <ul>
                  <li>Poleras: desde $6.990</li>
                  <li>Vestidos: desde $12.990</li>
                  <li>Envío a todo Chile</li>
                </ul>
                <h4>Galería</h4>
                <div className="galeria">
                  {[1, 2, 3, 4].map((n) => (
                    <img key={n} src={`/imagenes/servicios/ropa${n}.jpg`} alt={`Prenda ${n}`} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Streaming */}
          <div className="tarjeta servicio">
            <img src="/imagenes/servicios/netflix.jpg" alt="Streaming" />
            <p><strong>Streaming</strong></p>
            <p>Plataformas compartidas como Netflix, HBO Max y más.</p>
            <button onClick={() => toggleDetalles('streaming')}>Conocer más</button>
            {detalles.streaming && (
              <div className="detalles_servicio">
                <h4>Precios</h4>
                <ul>
                  <li>Netflix: desde $2.000 mensual</li>
                  <li>HBO Max: desde $2.000 mensual</li>
                  <li>Disney+, Prime Video y más</li>
                </ul>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Servicios;
