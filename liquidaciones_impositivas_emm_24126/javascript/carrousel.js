document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contenedor y el elemento interno del carrusel
    var carouselContainer = document.getElementById("carouselContainer");
    var carouselInner = document.getElementById("carouselInner");

    // Obtener todas las imágenes del carrusel
    var carouselItems = carouselInner.getElementsByClassName("carousel-item");

    // Función para mostrar una imagen aleatoria del carrusel
    function mostrarImagenAleatoria() {
        // Ocultar todas las imágenes
        for (var i = 0; i < carouselItems.length; i++) {
            carouselItems[i].classList.remove("active");
        }
        // Elegir aleatoriamente una imagen y mostrarla
        var randomIndex = Math.floor(Math.random() * carouselItems.length);
        carouselItems[randomIndex].classList.add("active");
    }

    // Mostrar una imagen aleatoria cada 2 segundos
    setInterval(mostrarImagenAleatoria, 2000);
});
