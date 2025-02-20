// Obtener el elemento que se ocultará/mostrará al hacer scroll
var volverBtn = document.getElementById("volver");

// Obtener la posición vertical de la sección "americano"
var seccionAmericano = document.getElementById("americano").offsetTop;

// Función para mostrar/ocultar el botón de volver según la posición del scroll
function toggleVolverBtn() {
    if (window.scrollY >= seccionAmericano) {
        volverBtn.style.display = "block";
    } else {
        volverBtn.style.display = "none";
    }
}

// Agregar un event listener para detectar el scroll
window.addEventListener("scroll", toggleVolverBtn);

// Llamar a la función una vez al principio para asegurarse de que el botón esté oculto inicialmente si el usuario carga la página desde arriba de la sección "americano"
toggleVolverBtn();
