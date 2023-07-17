window.addEventListener('DOMContentLoaded', main);

/**
 * Main program
 * @function main
 */
function main() {
  eventBurgerMenu();
  typeWriter();
}

/** @type {number} variable with the type string, goes from index 0 in order to loop trough the length of the string */
let contactLetters = 0;

/** @type {string} variable with value of type string that will be looped in the function below and written out in the DOM */
const contactText = 'How to reach me';

/** @type {number} variable with value of type number that defines the speed of the written letters */
let speed = 120;

/**
 * @function typeWriter
 * Loops through and writes out the text in the DOM letter by letter
 * Calls itself with setTimeout
 */
function typeWriter() {
  if (contactLetters < contactText.length) {
    document.getElementById('typeOutLetters').innerHTML +=
      contactText.charAt(contactLetters);
    contactLetters++;
    setTimeout(typeWriter, speed);
  }
}
