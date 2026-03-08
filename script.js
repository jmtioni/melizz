$('html, body').hide().fadeIn(2000);

const modal = document.getElementById("modal-galeria");
const imgModal = document.getElementById("imagen-modal");
const btnCerrar = document.querySelector(".cerrar");

// Función universal para cerrar
const cerrarModal = () => {
    modal.classList.remove("visible");

    // Escuchamos cuando termina la transición de CSS para quitar el display
    modal.addEventListener('transitionend', () => {
        if (!modal.classList.contains('visible')) {
            modal.style.display = "none";
        }
    }, { once: true });
};

// 1. Abrir modal al hacer clic en las miniaturas
document.querySelectorAll(".item img").forEach(img => {
    img.addEventListener('click', () => {
        imgModal.src = img.src;
        modal.style.display = "flex";
        
        // Pequeño delay para que el navegador note el cambio de display
        requestAnimationFrame(() => {
            modal.classList.add("visible");
        });
    });
});

// 2. Cerrar con el botón (X)
btnCerrar.onclick = cerrarModal;

// 3. Cerrar al hacer clic en el fondo oscuro
modal.addEventListener('click', (e) => {
    // Si el clic fue en el contenedor (fondo) y no en la imagen misma
    if (e.target === modal) {
        cerrarModal();
    }
});

// 4. Extra: Cerrar con la tecla Escape (muy útil para UX)
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && modal.classList.contains('visible')) {
        cerrarModal();
    }
});

//Script para Tienda
function toggleFavorito(elemento) {
    // .toggle añade la clase 'activo' si no la tiene, y la quita si ya la tiene
    elemento.classList.toggle('activo');
    
    // Opcional: Mostrar un mensaje en consola para saber el estado
    if(elemento.classList.contains('activo')) {
        console.log("Añadido a favoritos");
    } else {
        console.log("Quitado de favoritos");
    }
}
