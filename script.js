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

    // Create dark mode toggle button
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '<img src="night-mode-icon.png" alt="Toggle Dark Mode">';
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        updateDarkModeIcon();
    });

    // Function to update the dark mode icon
    function updateDarkModeIcon() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        darkModeToggle.innerHTML = `<img src="${isDarkMode ?'light-mode-icon.png'  : 'night-mode-icon.png'}" alt="Toggle Dark Mode">`;
    }

    // Add the dark mode toggle to the header
    const header = document.querySelector('header');
    header.appendChild(darkModeToggle);

    // Add CSS for positioning the toggle button
    const style = document.createElement('style');
    style.textContent = `
        #dark-mode-toggle {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            margin-left: auto;
        }
        #dark-mode-toggle img {
            width: 24px;
            height: 24px;
        }
        header {
            display: flex;
            align-items: center;
        }
    `;
    document.head.appendChild(style);
});
