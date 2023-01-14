window.addEventListener('DOMContentLoaded', main);

/**
 * Här startar programmet
 * @function main
 */
function main() {
  eventBurgerMenu();
  typeWriter();
}

/** @type {number} variabel som innehåller värdet string och utgår från indexplats 0 för att loopa igenom textsträngens längd */
let letters = 0;

/** @type {string} variabel med värdet av typen string som ska loopas igenom och skrivs ut */
const projectsText = "Coming soon!";

/** @type {number} variabel med värdet av typen number som definierar vilken hastighet bokstäverna ska skrivas ut i. */
let speed = 120;

/**
 * @function typeWriter
 * Loopar text som ska skrivas ut bokstav för bokstav
 * Värdet av hastigheten som bokstäverna ska skrivas ut i sparas i en global variabel med värdet "speed"
 * Funktionen anropar sig själv med hjälp av funktionen setTimeout
 */
function typeWriter() {
  if (letters < projectsText.length) {
    document.getElementById("typeOutLetters").innerHTML += projectsText.charAt(letters);
    letters++;
    setTimeout(typeWriter, speed);
  }
}