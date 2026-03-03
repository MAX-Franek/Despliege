// Funcionalidad del Menú Hamburguesa para móviles
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Muestra/Oculta la barra de navegación
        nav.classList.toggle('nav-active');

        // Anima las barras del botón hamburguesa (Opcional)
        burger.classList.toggle('toggle');
    });

    // Cierra el menú cuando se hace clic en un enlace
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });
}

// Inicializar la función
navSlide();

// Simulación del envío del formulario de contacto
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue
    const name = document.getElementById('name').value;
    
    // Alerta de éxito
    alert(`¡Genial ${name}! Tu mensaje ha sido "enviado". Me pondré en contacto contigo pronto.`);
    
    // Limpia el formulario
    contactForm.reset();
});