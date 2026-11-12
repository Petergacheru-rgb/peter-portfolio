
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Update footer year automatically
const footer = document.querySelector('footer p');

if (footer) {
    footer.textContent = `© ${new Date().getFullYear()} Peter Gacheru. All rights reserved.`;
}

console.log("Peter Gacheru Portfolio Loaded Successfully!");
