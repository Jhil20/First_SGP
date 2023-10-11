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

document.querySelector('#menue-btn').onclick = () => {
  sideBar.classList.toggle('active');
  body.classList.toggle('active');
}

document.querySelector('.side-bar #close-btn').onclick = () => {
  sideBar.classList.remove('active');
  body.classList.remove('active');
}

window.onscroll = () => {
  profile.classList.remove('active');
  searchForm.classList.remove('active');

  if (window.innerWidth < 1200) {
    sideBar.classList.remove('active');
    body.classList.remove('active');
  }
}
