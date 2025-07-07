import { Link } from 'react-router-dom';
import './navbar.css'; // si quieres estilos específicos

function Navbar() {
  return (
    <header>
      <div className="contenedor">
        <div className="logo">Ale Fernandez</div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><a href="/#estudios">Estudios</a></li>
            <li className="menu_hobbies">
              <a href="/#hobbies">Hobbies</a>
              <ul className="menu_contenido">
                <li><Link to="/lectura">Lectura</Link></li>
                <li><Link to="/juegos">Juegos</Link></li>
                <li><Link to="/musica">Música</Link></li>
                <li><Link to="/deportes">Deportes</Link></li>
              </ul>
            </li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><a href="/#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
