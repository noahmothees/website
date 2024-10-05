// DOM ELEMENTS

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  
    // Optional: Add functionality to close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
      if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });