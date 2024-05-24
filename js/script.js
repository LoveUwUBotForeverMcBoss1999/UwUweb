// Navbar Transparency Effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.classList.add('scrolled', 'transparent');
    } else {
        navbar.classList.remove('scrolled', 'transparent');
    }
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links ul');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Auto Fit to Screen Size
function adjustLayout() {
    const windowWidth = window.innerWidth;
    const content = document.querySelector('.content');
    const rows = content.querySelectorAll('.row');

    rows.forEach(row => {
        const image = row.querySelector('.image');
        const text = row.querySelector('.text');

        if (windowWidth <= 768) {
            // Mobile layout
            image.style.maxWidth = '100%';
            text.style.maxWidth = '100%';
        } else {
            // Desktop layout
            image.style.maxWidth = '50%';
            text.style.maxWidth = '50%';
        }
    });
}

// Initial layout adjustment
adjustLayout();

// Adjust layout on window resize
window.addEventListener('resize', adjustLayout);

// Text Animation on Scroll
function animateOnScroll() {
    const textElements = document.querySelectorAll('.text.animate__animated');

    textElements.forEach(text => {
        const textPosition = text.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (textPosition < windowHeight * 0.8) {
            text.classList.add('animate__fadeInUp');
        }
    });
}

// Initial animation check
animateOnScroll();

// Animate on scroll
window.addEventListener('scroll', animateOnScroll);


// FAQs
function toggleAnswer(id) {
    const answer = document.getElementById(`answer${id}`);
    const icon = document.querySelector(`#answer${id} + .faq-item .plus-icon`);

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.classList.remove("expanded");
    } else {
        answer.style.display = "block";
        icon.classList.add("expanded");
    }
}


var loadingScreen = document.getElementById('loading-screen');

        window.addEventListener('load', function() {
            hideLoadingScreen();
        });

        window.addEventListener('beforeunload', function() {
            showLoadingScreen();
        });

        function showLoadingScreen() {
            loadingScreen.style.display = 'flex';
            setTimeout(hideLoadingScreen, 3000);
        }

        function hideLoadingScreen() {
            loadingScreen.style.display = 'none';
        }
