window.addEventListener("DOMContentLoaded", main);

/**
 * Här startar programmet
 * @function main
 */
function main() {
  eventBurgerMenu();
  typeWriter();
}

/** @type {number} variable with value of type string, goes from index 0 in order to loop trough the length of the string */
let letters = 0;

/** @type {string} variable with value of type string that will be looped in the function below and written out in the DOM */
const projectsText = "More projects coming soon!";

/** @type {number} variable with value of type number that defines the speed of the written letters */
let speed = 120;

/**
 * @function typeWriter
 * Loops through and writes out the text in the DOM letter by letter
 * Calls itself with setTimeout
 */
function typeWriter() {
  if (letters < projectsText.length) {
    document.getElementById("typeOutLetters").innerHTML +=
      projectsText.charAt(letters);
    letters++;
    setTimeout(typeWriter, speed);
  }
}
