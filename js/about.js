window.addEventListener('DOMContentLoaded', main);

/**
 * Här startar programmet, dessa funktioner ska vara förberedda att köras när sidan laddat klart
 * @function main
 */
function main() {
  eventBurgerMenu();
  typeWriter();
}

/** @type {number} variabel som innehåller värdet string och utgår från indexplats 0 för att loopa igenom textsträngens längd */
let aboutLetters = 0;

/** @type {string} variabel med värdet av typen string som ska loopas igenom och skrivs ut */
const aboutText = "Hi, I'm Lisa Marie. I'm studying to become a Front End Developer at Medieinstitutet in Gothenburg.";

/** @type {number} variabel med värdet av typen number som definierar vilken hastighet bokstäverna ska skrivas ut i. */
let speed = 70;

/**
 * @function typeWriter
 * Loopar text som ska skrivas ut bokstav för bokstav
 * Värdet av hastigheten som bokstäverna ska skrivas ut i sparas i en global variabel med värdet "speed"
 * Funktionen anropar sig själv med hjälp av funktionen setTimeout
 */
function typeWriter() {
  if (aboutLetters < aboutText.length) {
    document.getElementById("typeOutLetters").innerHTML += aboutText.charAt(aboutLetters);
    aboutLetters++;
    setTimeout(typeWriter, speed);
  }
}