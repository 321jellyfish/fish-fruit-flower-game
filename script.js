/*Create categoryButtons*/
const fishButton = document.querySelector("#fish-button");
const fruitButton = document.querySelector("#fruit-button");
const flowerButton = document.querySelector("#flower-button");
const firstLetter = document.querySelector("#first-letter");
const startAgainButton = document.querySelector("#start-again-button");
const userGuesses = document.querySelector(".userGuesses");
const firstLetterClue = document.querySelector("#first-letter-clue");

// const submitButton = document.querySelector("#submit-button");

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let computerFruit = "";

firstLetter.disabled = true;
// submitButton.disabled = true;
startAgainButton.disabled = true;

let fish=["Anchovy", "Bass", "Carp", "Catfish", "Clam", "Cod", "Crab", "Flounder", "Haddock", "Hake", "Halibut", "Herring", "Lobster",
"Mackerel", "Oyster", "Perch", "Plaice", "Pollock", "Rainbow trout", "Salmon", "Sardine", "Scallop", "Shark", "Swordfish", "Tuna",
"Whiting"];

let fruit=["Apple", "Apricot", "Avocado", "Banana", "Blueberry", "Cherry", "Cranberry", "Currant", "Date", "Fig", "Grape", "Grapefruit", "Kiwi", 
"Lemon", "Lime", "Lychee", "Mango", "Nectarine", "Orange", "Papaya", "Passion fruit", "Peach", "Pear", "Pineapple", "Plum", "Pomegranate", "Raspberry",
"Strawberry", "Tangerine", "Watermelon"];

let flower=["Anemone", "Aster", "Azalea", "Buttercup", "Carnation", "Chrysanthemum", "Crocus", "Daffodil", "Dahlia", "Hyacinth", "Lilac", "Lily",
"Marigold", "Peony", "Pansy", "Snapdragon", "Tulip"];



firstLetter.addEventListener("click", () => {
  firstLetterClue.textContent = computerFruit[0];
});

fishButton.addEventListener("click", () => {
  fishButton.classList.add("selected");
});

fruitButton.addEventListener("click", () => {
  fruitButton.classList.add("selected");
  enableButtons();
  guessField.focus();

  let randomNumber = Math.floor((Math.random() * fruit.length));
  console.log(randomNumber);
  computerFruit = fruit[randomNumber];
  console.log({computerFruit});
  return computerFruit;
});

guessSubmit.addEventListener("click", () => {
  const userGuess = guessField.value;
  if(userGuess === computerFruit){
    console.log("yay!");
    userGuesses.textContent = "Correct, you got it!";
  }
});



flowerButton.addEventListener("click", () => {
    flowerButton.classList.add("selected");
    
  });  


startAgainButton.addEventListener("click", () => {
  firstLetter.disabled = true;
  startAgainButton.disabled = true;
  guessField.value = "";
  userGuesses.textContent = "";
  firstLetterClue.textContent = "";
  fruitButton.classList.toggle("selected");
})


function enableButtons (){
  firstLetter.disabled = false;
  // submitButton.disabled = false;
  startAgainButton.disabled = false;
}


/* Problems to solve:
- make buttons clickable 
- decide on design on buttons*/
