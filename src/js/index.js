const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

const navLinks2 = document.getElementById('other-navs');

//Letting user open hamburger menu for all pages

// All other pages
hamburger.addEventListener('click', () => {
    navLinks2.classList.toggle('show');
});