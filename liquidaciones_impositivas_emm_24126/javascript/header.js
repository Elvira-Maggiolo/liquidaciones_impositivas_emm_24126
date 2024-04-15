// Función para desplazamiento suave al hacer clic en los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
