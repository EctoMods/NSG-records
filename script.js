const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    // Basic mobile menu toggle logic
    alert("Mobile menu clicked! (Connect your CSS classes here to slide the menu in)");
});

document.getElementById('news-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('YOU ARE NOW IN THE GRIND.');
});
