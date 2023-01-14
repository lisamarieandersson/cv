// Denna js-fil används som ett bibliotek för hamburgermenyn
// Funktionerna för denna körs i de andra js-filerna

/**
 * Lyssnar efter eventet om användaren klickar på hamburgermenyn som finns 
 * på sidan och aktiverar då denna knapp för att användaren ska kunna öppna menyn
 * @function eventBurgerMenu 
 */
function eventBurgerMenu() {
  const burgerMenuButton = document.getElementById('burger-menu');
  burgerMenuButton.onclick = toggleMenu;
}

/**
 * Gör att hamburgermenyn fälls ut 100% vertikalt i webbläsarfönstret när användaren 
 * klickar på den, så att användaren kan se och klicka på kategorier som finns i navigationen
 * @function toggleMenu
 */
function toggleMenu() {
  const header = document.querySelector("header");
  header.classList.toggle("open");
}
