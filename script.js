// Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Get the ID from the href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Highlight Active Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    // Find the current section in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Adjust for fixed nav height
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    // Update the active class on nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});