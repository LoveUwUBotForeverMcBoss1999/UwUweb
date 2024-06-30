document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Navigation menu toggle for mobile
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            burger.classList.toggle('toggle');
        });
    }

    navSlide();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to terms items
    const termsItems = document.querySelectorAll('.terms-item');
    termsItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'var(--hover-color)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'var(--secondary-color)';
        });
    });
});