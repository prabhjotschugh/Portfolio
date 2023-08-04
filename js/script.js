const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('.toggle-icon');
const moonIcon = themeToggle.querySelector('.fa-moon');
const sunIcon = themeToggle.querySelector('.fa-sun');
const nava = document.getElementById('nava');
const hamburger = document.getElementById('menu-icon');

// Function to toggle dark mode classes
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  nava.classList.toggle('dark-mode');
  nava.classList.toggle('white-links');

  const isDarkMode = document.body.classList.contains('dark-mode');
  moonIcon.style.opacity = isDarkMode ? '1' : '0';
  sunIcon.style.opacity = isDarkMode ? '0' : '1';
  themeIcon.style.transform = isDarkMode ? 'translateX(26px)' : 'translateX(0)';

  // Store the user's preference in localStorage
  localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
}

themeToggle.addEventListener('click', () => {
  toggleDarkMode();
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

const sr = ScrollReveal({
  distance: '100px',
  duration: 2000,
  reset: true
});
sr.reveal('.home-text', {
  delay: 120,
  origin: 'top'
});
sr.reveal('.home-img', {
  delay: 180,
  origin: 'top'
});
sr.reveal('.about, .services, .cta, .audio-sec, .resume, .contact, .copyright', {
  delay: 240,
  origin: 'bottom'
});

// Check if the user has a preference for dark mode
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Check if the user previously set the mode in localStorage
const storedDarkMode = localStorage.getItem('darkMode');

// Set dark mode by default if the user has a preference for it or previously set the mode
if (prefersDarkMode || storedDarkMode === 'true') {
  toggleDarkMode();
}
