/*Create categoryButtons*/
const fishButton = document.querySelector("#fish-button");
const fruitButton = document.querySelector("#fruit-button");
const flowerButton = document.querySelector("#flower-button");
const firstLetter = document.querySelector("#first-letter");
const startAgainButton = document.querySelector("#start-again-button");
const submitButton = document.querySelector("#submit-button");

firstLetter.disabled = true;
submitButton.disabled = true;
startAgainButton.disabled = true;


/*button.addEventListener('click', () => {
    button.disabled = true;
  });*/


firstLetter.addEventListener("click", () => console.log("Kitten"));



fruitButton.addEventListener("click", () => {
    console.log("Banana");
    fruitButton.classList.add("selected");
});

flowerButton.addEventListener("click", () => {
    console.log("Tulip");
  });  

/* Problems to solve:
- make buttons clickable 
- decide on design on buttons*/
