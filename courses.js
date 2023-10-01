        document.addEventListener('DOMContentLoaded', function () {
            // Check if the user has a theme preference in local storage
            const savedTheme = localStorage.getItem('theme');
            
            // If a theme is saved in local storage, apply it
            if (savedTheme) {
                document.body.classList.add(savedTheme);
            }

            // Function to toggle the theme
            function toggleTheme() {
                const body = document.body;
                if (body.classList.contains('dark')) {
                    body.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                } else {
                    body.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                }
            }

            // Get the theme toggle button element
            const themeToggleBtn = document.getElementById('toggle-btn');
            
            // Add a click event listener to the theme toggle button
            themeToggleBtn.addEventListener('click', toggleTheme);
        });