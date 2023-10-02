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
let body = document.body;

let profile = document.querySelector('.header .flex .profile');
document.querySelector('#user-btn').onclick = () =>{
  profile.classList.toggle('active');
  searchForm.classList.remove('active');
}
let searchForm = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  profile.classList.remove('active');
}
let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
  sideBar.classList.toggle('active');
  body.classList.toggle('active');
}
window.onscroll = () =>{
  profile.classList.remove('active');
  searchForm.classList.remove('active');
}
