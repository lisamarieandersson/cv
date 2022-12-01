window.addEventListener('DOMContentLoaded', main);

/**
 * Här startar programmet
 */
function main() {
  addEventListeners();
}

/**
 * 
 */
function addEventListeners() {
  const burgerMenuButton = document.getElementById('burger-menu');
  burgerMenuButton.onclick = toggleMenu;
}

/**
 * 
 */
function toggleMenu() {
  const header = document.querySelector("header");
  header.classList.toggle("open");
}