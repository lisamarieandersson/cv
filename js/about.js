window.addEventListener("DOMContentLoaded", main);

/**
 * Main program
 * @function main
 */
function main() {
  eventBurgerMenu();
  typeWriter();
}

/** @type {number} variable with value of type string, goes from index 0 in order to loop trough the length of the string */
let aboutLetters = 0;

/** @type {string} variable with value of type string that will be looped in the function below and written out in the DOM */
const aboutText =
  "Hi, I'm Lisa Marie. I'm studying to become a Front End Developer at Medieinstitutet in Gothenburg.";

/** @type {number} variable with value of type number that defines the speed of the written letters */
let speed = 70;

/**
 * @function typeWriter
 * Loops through and writes out the text in the DOM letter by letter
 * Calls itself with setTimeout
 */
function typeWriter() {
  if (aboutLetters < aboutText.length) {
    document.getElementById("typeOutLetters").innerHTML +=
      aboutText.charAt(aboutLetters);
    aboutLetters++;
    setTimeout(typeWriter, speed);
  }
}
