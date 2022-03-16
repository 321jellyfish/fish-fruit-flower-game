/*Create categoryButtons*/
const fishButton = document.querySelector("#fish-button");
const fruitButton = document.querySelector("#fruit-button");
const flowerButton = document.querySelector("#flower-button");
const firstLetter = document.querySelector("#first-letter");
const startAgainButton = document.querySelector("#start-again-button");
// const submitButton = document.querySelector("#submit-button");

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

firstLetter.disabled = true;
// submitButton.disabled = true;
startAgainButton.disabled = true;

let fruit = ["Apple", "Apricot", "Avocado", "Banana", "Blueberry", "Cherry"];

firstLetter.addEventListener("click", () => console.log("Kitten"));

fishButton.addEventListener("click", () => {
  fishButton.classList.add("selected");
});

fruitButton.addEventListener("click", () => {
  fruitButton.classList.add("selected");
  // enableButtons();

  let randomNumber = Math.floor((Math.random() * fruit.length));
  console.log(randomNumber);
  let computerFruit = fruit[randomNumber];
  console.log({computerFruit});
  const userGuess = guessField.value;
  if (userGuess === computerFruit){
    console.log("yay!");
  }


});

flowerButton.addEventListener("click", () => {
    flowerButton.classList.add("selected");
    
  });  





function enableButtons (){
  firstLetter.disabled = false;
  // submitButton.disabled = false;
  startAgainButton.disabled = false;
}


/* Problems to solve:
- make buttons clickable 
- decide on design on buttons*/
