export function initBurger() {
    
    const burgerBtn = document.querySelector('.header__burger');
    const headerNav = document.getElementById('header__nav');
    const body = document.body;


    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('burger--open');
        headerNav.classList.toggle('header__nav--open');
    });


    const navLinks = headerNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('burger--open');
            headerNav.classList.remove('header__nav--open');
            body.style.overflow = '';
            burgerBtn.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        if (
            headerNav.classList.contains('header__nav--open') &&
            !headerNav.contains(e.target) &&
            !burgerBtn.contains(e.target)
        ) {
            toggleMenu();
        }
    });

}