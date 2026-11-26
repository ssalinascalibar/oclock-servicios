const header = document.querySelector('.header');
const menuToggle = header.querySelector('.header-toggle');
const navigation = header.querySelector('.header-nav');

menuToggle.hidden = false;

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') !== 'true';

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
});

navigation.addEventListener('click', (event) => {
    if (event.target.closest('a') && menuToggle.getAttribute('aria-expanded') === 'true') {
        menuToggle.click();
        menuToggle.focus();
    }
});

header.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        menuToggle.click();
        menuToggle.focus();
    }
});

// Conserva el estado cerrado y evita perder el foco al cambiar entre móvil y escritorio.
window.matchMedia('(min-width: 768px)').addEventListener('change', (event) => {
    if (menuToggle.getAttribute('aria-expanded') === 'true') {
        menuToggle.click();
    }

    if (event.matches && document.activeElement === menuToggle) {
        navigation.querySelector('a').focus();
    } else if (!event.matches && navigation.contains(document.activeElement)) {
        menuToggle.focus();
    }
});
