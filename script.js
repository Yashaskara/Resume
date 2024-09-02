// Add any JavaScript functionality here
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add this to the existing DOMContentLoaded event listener
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
    document.body.insertBefore(darkModeToggle, document.body.firstChild);
});
