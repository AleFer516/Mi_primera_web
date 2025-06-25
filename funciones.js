function validarContacto() {
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  if (!nombre.value.trim() || !correo.value.trim() || !mensaje.value.trim()) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  if (!correo.value.includes("@") || !correo.value.includes(".")) {
    alert("Por favor, ingresa un correo válido.");
    return false;
  }

  alert("¡Gracias por contactarme, " + nombre.value.trim() + "!");

  nombre.value = "";
  correo.value = "";
  mensaje.value = "";

  return false; 
}



function toggleDetalles(servicio) {
  const detalles = document.getElementById(`detalles-${servicio}`);

  if (detalles.classList.contains("oculto")) {
    detalles.classList.remove("oculto");
  } else {
    detalles.classList.add("oculto");
  }
}
