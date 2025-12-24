const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Welcome to the NSG Inner Circle.');
});
