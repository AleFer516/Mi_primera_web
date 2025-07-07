export function iniciarCarruselJuegos() {
  const carrusel = document.querySelector('.carrusel_juegos');

  let scrollY = 0;

  function mover() {
    scrollY += 1;
    carrusel.scrollTop = scrollY;

    // Reinicia al final
    if (scrollY >= carrusel.scrollHeight - carrusel.clientHeight) {
      scrollY = 0;
    }

    requestAnimationFrame(mover);
  }

  mover();
}
