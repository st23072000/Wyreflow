// Example: Toggle mobile navigation
const navLinks = document.querySelector('.nav-links');

document.querySelector('.menu-toggle').addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
