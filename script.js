/**
 * Lógica para el Portafolio Profesional de Daniel Andrade
 */

function abrirImagen(ruta, texto) {
    const modal = document.getElementById("modal-flotante");
    const imgModal = document.getElementById("imagen-ampliada");
    const descripcion = document.getElementById("descripcion-imagen");

    modal.style.display = "flex";
    imgModal.src = ruta;
    descripcion.innerHTML = texto;
    
    // Evitar que se mueva el fondo al abrir
    document.body.style.overflow = "hidden";
}

function cerrarImagen() {
    const modal = document.getElementById("modal-flotante");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Cerrar con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") cerrarImagen();
});

console.log("Portafolio de Ingeniería Química & Cloud cargado.");