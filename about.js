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
 * Denna funktion gör att hamburgermenyn fälls ut nedåt i 100% av webbläsarfönstret när 
 * användaren klickar på den, så användaren kan se och klicka på kategorier som finns i navigationen
 * @function toggleMenu
 */
function toggleMenu() {
  const header = document.querySelector("header");
  header.classList.toggle("open");
}

/** @type {(string|Array)} variabeln i utgår från värdet med indexplats 0, så länge i är mindre än textlängden kommer loopen köras */
let i = 0;

/** @type {(string|Array)} variabel med värdet av typen string som ska loopas igenom och skrivas ut */
const text = "Hi, I'm Lisa Marie. I'm studying to become a Front End Developer at Medieinstitutet in Gothenburg.";

/** @type {(number)} @param {(number)} variabel med värdet av typen number som definierar vilken hastighet bokstäverna/textsträngen ska skrivas ut i */
let speed = 75;

/**
 * @function typeWriter
 * Denna funktion genererar textsträngen som ska skrivas ut bokstav för bokstav 
 * Detta görs med hjälp av en while loop
 * Värdet av hastigheten som bokstäverna ska skrivas ut i sparas i en global variabel med värdet speed
 * Denna variabel används som parameter i funktionen setTimeout
 * Funktionen setTimeout stoppar funktionen typeWriter när textsträngen loopats igenom
 */
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typeOutLetters").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

