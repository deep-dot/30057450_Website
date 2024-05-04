
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        // Toggle the 'active' class on the nav-links
        navLinks.classList.toggle('active');
        });
    });

