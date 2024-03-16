document.addEventListener('DOMContentLoaded', function() {
    // Función para agrandar un elemento al pasar el cursor sobre él
    function agrandarElemento(elemento) {
        elemento.addEventListener('mouseenter', function() {
            elemento.style.transform = 'scale(1.1)'; // Aumenta el tamaño del elemento
        });
        elemento.addEventListener('mouseleave', function() {
            elemento.style.transform = ''; // Restaura el tamaño original del elemento
        });
    }

    // Obtener todos los íconos dentro del footer y aplicar la animación
    var iconosFooter = document.querySelectorAll('footer img');
    iconosFooter.forEach(function(icono) {
        agrandarElemento(icono);
    });

    // Obtener todos los divs con las clases "contenido-1" y "contenido-2" y aplicar la animación
    var divsContenido = document.querySelectorAll('.contenido-1, .contenido-2,.nuevo-div-3, .nuevo-div-4');
    divsContenido.forEach(function(div) {
        agrandarElemento(div);
    });

    // Aplicar la opacidad al desplazarse al contenido
    function aplicarOpacidad(contenedor) {
        var windowHeight = window.innerHeight;

        function handleScroll() {
            var scrollPosition = window.scrollY;
            var opacity = 1 - (scrollPosition / windowHeight); // Calcular la opacidad basada en la posición de desplazamiento
            contenedor.style.opacity = opacity >= 0 ? opacity : 0; // Asegurar que la opacidad esté en el rango [0, 1]
        }

        // Agregar evento de desplazamiento
        window.addEventListener('scroll', handleScroll);
    }

    // Aplicar la opacidad al desplazarse al contenido
    var contenido = document.querySelector('main');
    aplicarOpacidad(contenido);
});