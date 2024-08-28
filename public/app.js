
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const secondaryLinks = document.getElementById('secondary-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    secondaryLinks.classList.toggle('hidden');
});
