export function activarScrollAutomatico(carrusel) {
  let scrollInterval;

  function startAutoScroll() {
    scrollInterval = setInterval(() => {
      if (carrusel) {
        carrusel.scrollLeft += 1;
        if (carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth) {
          carrusel.scrollLeft = 0;
        }
      }
    }, 30); 
  }

  function stopAutoScroll() {
    clearInterval(scrollInterval);
  }

  carrusel.addEventListener("mouseenter", stopAutoScroll);
  carrusel.addEventListener("mouseleave", startAutoScroll);

  startAutoScroll();

 
  return () => {
    clearInterval(scrollInterval);
    carrusel.removeEventListener("mouseenter", stopAutoScroll);
    carrusel.removeEventListener("mouseleave", startAutoScroll);
  };
}
