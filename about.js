window.addEventListener('DOMContentLoaded', main);

/**
 * Här startar programmet, dessa funktioner ska vara förberedda att köras när sidan laddat klart
 * @function main
 */
function main() {
  addEventListeners();
  typeWriter();
}

/**
 * Denna funktion lyssnar efter om användaren klickar på hamburgermenyn som finns 
 * på sidan och aktiverar då denna knapp för att användaren ska kunna öppna menyn
 * @function addEventListeners 
 */
function addEventListeners() {
  const burgerMenuButton = document.getElementById('burger-menu');
  burgerMenuButton.onclick = toggleMenu;
}

/**
 * Denna funktion gör att hamburgermenyn fälls ut 100% vertikalt i webbläsarfönstret när användaren 
 * klickar på den, så att användaren kan se och klicka på kategorier som finns i navigationen
 * @function toggleMenu
 */
function toggleMenu() {
  const header = document.querySelector("header");
  header.classList.toggle("open");
}

/** @type {(string|Array)} array-variabel som innehåller värdet string och utgår från indexplats 0 för att loopa igenom textsträngens längd */
let i = 0;

/** @type {(string|Array)} variabel med värdet av typen string som ska loopas igenom och skrivas ut */
const text = "Hi, I'm Lisa Marie. I'm studying to become a Front End Developer at Medieinstitutet in Gothenburg.";

/** @type {(number)} @param {(number)} variabel med värdet av typen number som definierar vilken hastighet bokstäverna/textsträngen ska skrivas ut i. Används också som parameter. */
let speed = 75;

/** @param {typeWriter} används som parameter tillsammans med variabeln let speed i funktionen setTimeout */

/**
 * @function typeWriter
 * Denna funktion genererar en vald textsträng som ska skrivas ut bokstav för bokstav 
 * Detta görs med hjälp av en while loop
 * Värdet av hastigheten som bokstäverna ska skrivas ut i sparas i en global variabel med värdet speed
 * Variabeln speed används som parameter tillsammans med funktionen typeWriter i funktionen setTimeout
 * Funktionen setTimeout kör koden efter en viss tid
 */
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typeOutLetters").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

