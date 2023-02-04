// This js-file is used as a library for the hamburger menu
// The functions below will run inside the other js-files in this project

/**
 * Click event for hamburger menu
 * @function eventBurgerMenu
 */
function eventBurgerMenu() {
  const burgerMenuButton = document.getElementById("burger-menu");
  burgerMenuButton.onclick = toggleMenu;
}

/**
 * Makes the hamburger menu toggle veritcally when the user clicks on it
 * @function toggleMenu
 */
function toggleMenu() {
  const header = document.querySelector("header");
  header.classList.toggle("open");
}
