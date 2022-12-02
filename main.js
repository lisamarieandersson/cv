window.addEventListener('DOMContentLoaded', main);

/**
 * Detta program laddar funktioner som ska vara redo när sidan körs
 * @function main
 */
function main() {
  addEventListeners();
}

/**
 * Denna funktion lyssnar efter om användaren klickar på hamburgermenyn som finns 
 * på sidan och aktiverar då denna knapp för att användaren ska kunna klicka på den och öppna menyn
 * @function addEventListeners 
 */
function addEventListeners() {
  const burgerMenuButton = document.getElementById('burger-menu');
  burgerMenuButton.onclick = toggleMenu;
}

/**
 * Denna funktion gör att hamburgermenyn fälls ut nedåt 100% av webbläsarfönstret
 * när användaren klickar på den så användaren kan se och klicka påkategorier som 
 * finns i navigationen
 * @function toggleMenu
 */
function toggleMenu() {
  const header = document.querySelector("header");
  header.classList.toggle("open");
}
