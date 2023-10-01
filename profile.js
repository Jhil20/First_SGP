document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const toggleBtn = document.getElementById("toggle-btn");

  // Check the current theme from local storage or system preferences
  const currentTheme = localStorage.getItem("theme") || getSystemTheme();

  // Set the initial theme
  setTheme(currentTheme);

  // Toggle between light and dark themes
  toggleBtn.addEventListener("click", function () {
    const newTheme = body.classList.contains("dark") ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Function to set the theme
  function setTheme(theme) {
    body.className = theme;
  }
  // Function to detect the system theme
  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }
});
