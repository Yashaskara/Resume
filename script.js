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
        toggleDarkMode();
    });

    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        updateDarkModeIcon();
        // Save dark mode state to localStorage
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    }

    // Function to update the dark mode icon
    function updateDarkModeIcon() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        darkModeToggle.innerHTML = `<img src="${isDarkMode ? 'light-mode-icon.png' : 'night-mode-icon.png'}" alt="Toggle Dark Mode">`;
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

    // Function to set the active tab based on the current URL
    function setActiveTab() {
        const currentPage = window.location.pathname.split("/").pop() || 'index.html';
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Call setActiveTab when the page loads
    setActiveTab();

    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow default action for all links
            // The active tab will be set when the new page loads
        });
    });
});
