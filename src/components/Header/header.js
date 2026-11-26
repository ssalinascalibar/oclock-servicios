const header = document.querySelector('.header');
const menuToggle = header?.querySelector('.header-toggle');
const navigation = header?.querySelector('.header-nav');

if (header && menuToggle instanceof HTMLButtonElement && navigation instanceof HTMLElement) {
    const desktopMedia = window.matchMedia('(min-width: 768px)');

    const setMenuOpen = (isOpen) => {
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
        navigation.hidden = !isOpen;
    };

    const syncMenu = () => {
        const toggleWasFocused = document.activeElement === menuToggle;
        const navigationWasFocused = navigation.contains(document.activeElement);

        setMenuOpen(desktopMedia.matches);
        menuToggle.hidden = desktopMedia.matches;

        if (desktopMedia.matches && toggleWasFocused) {
            navigation.querySelector('a')?.focus();
        } else if (!desktopMedia.matches && navigationWasFocused) {
            menuToggle.focus();
        }
    };

    menuToggle.addEventListener('click', () => {
        setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    navigation.addEventListener('click', (event) => {
        if (!desktopMedia.matches && event.target instanceof Element && event.target.closest('a')) {
            setMenuOpen(false);
            menuToggle.focus();
        }
    });

    header.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !desktopMedia.matches && menuToggle.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false);
            menuToggle.focus();
        }
    });

    desktopMedia.addEventListener('change', syncMenu);
    syncMenu();
}
