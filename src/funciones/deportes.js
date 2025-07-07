
export function iniciarCarruselDeportes() {
  const carrusel = document.querySelector('.carrusel_deportes');
  if (!carrusel) return;

  let desplazamiento = 0;

  function moverCarrusel() {
    desplazamiento += 1;
    if (desplazamiento >= carrusel.scrollWidth - carrusel.clientWidth) {
      desplazamiento = 0;
    }
    carrusel.scrollLeft = desplazamiento;
    requestAnimationFrame(moverCarrusel);
  }

  requestAnimationFrame(moverCarrusel);
}
