document.addEventListener('DOMContentLoaded', function() {
    const secciones = document.querySelectorAll('.contenido');

    secciones.forEach(seccion => {
        const header = seccion.querySelector('h2');
        const contenido = seccion.querySelector('.contenido-desplegable');

        header.addEventListener('click', function() {
            contenido.style.display = contenido.style.display === 'none' || contenido.style.display === '' ? 'block' : 'none';
        });
    });
});
