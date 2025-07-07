
export function toggleDetalles(servicio) {
  const detalles = document.getElementById(`detalles-${servicio}`);

  if (detalles.classList.contains("oculto")) {
    detalles.classList.remove("oculto");
  } else {
    detalles.classList.add("oculto");
  }
}
