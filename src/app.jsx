import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Lectura from './pages/lectura';
import Juegos from './pages/juegos';
import Musica from './pages/musica';
import Deportes from './pages/deportes';
import Servicios from './pages/servicios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/lectura" element={<Lectura />} />
        <Route path="/juegos" element={<Juegos />} />
        <Route path="/musica" element={<Musica />} />
        <Route path="/deportes" element={<Deportes />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </Router>
  );
}

export default App;
