window.addEventListener('DOMContentLoaded', main);

/**
 * Detta program laddar funktioner som ska vara redo när sidan körs
 * @function main
 */
function main() {
  eventBurgerMenu();
  typeWriter();
}

/** @type {number} variabel som innehåller värdet string och utgår från värdet 0 för att loopa igenom textsträngens längd */
let contactLetters = 0;

/** @type {string} variabel med värdet av typen string som ska loopas igenom och skrivs ut */
const contactText = "Contact me";

/** @type {number} variabel med värdet av typen number som definierar vilken hastighet bokstäverna ska skrivas ut i. */
let speed = 120;

/**
 * @function typeWriter
 * Loopar text som ska skrivas ut bokstav för bokstav
 * Värdet av hastigheten som bokstäverna ska skrivas ut i sparas i en global variabel med värdet "speed"
 * Funktionen anropar sig själv med hjälp av funktionen setTimeout
 */
function typeWriter() {
  if (contactLetters < contactText.length) {
    document.getElementById("typeOutLetters").innerHTML += contactText.charAt(contactLetters);
    contactLetters++;
    setTimeout(typeWriter, speed);
  }
}