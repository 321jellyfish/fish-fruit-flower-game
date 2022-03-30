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

let computerFish = "";
let computerFruit = "";
let computerFlower = "";

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
  if(fishButton.disabled === false){
    firstLetterClue.textContent = computerFish[0];
  }
  if(fruitButton.disabled === false){
    firstLetterClue.textContent = computerFruit[0];
  }
  if(flowerButton.disabled === false){
    firstLetterClue.textContent = computerFlower[0];
  }
  

});

fishButton.addEventListener("click", () => {
  fishButton.classList.add("selected");
  enableButtons();
  guessField.focus();
  fruitButton.disabled = true;
  flowerButton.disabled = true;

  let randomNumber = Math.floor((Math.random() * fish.length));
  console.log(randomNumber);
  computerFish = fish[randomNumber];
  console.log({computerFish});
  return computerFish;

});

fruitButton.addEventListener("click", () => {
  fruitButton.classList.add("selected");
  enableButtons();
  guessField.focus();
  fishButton.disabled = true;
  flowerButton.disabled = true;

  let randomNumber = Math.floor((Math.random() * fruit.length));
  console.log(randomNumber);
  computerFruit = fruit[randomNumber];
  console.log({computerFruit});
  return computerFruit;
});

flowerButton.addEventListener("click", () => {
    flowerButton.classList.add("selected");
    enableButtons();
    guessField.focus();
    fruitButton.disabled = true;
    fishButton.disabled = true;
  
    let randomNumber = Math.floor((Math.random() * flower.length));
    console.log(randomNumber);
    computerFlower = flower[randomNumber];
    console.log({computerFlower});
    return computerFlower;
    
  });  

guessSubmit.addEventListener("click", () => {
    const userGuess = guessField.value;
    if(userGuess === computerFish){
      console.log("yay!");
      userGuesses.textContent = "Correct, you got it!";
    }
    if(userGuess === computerFruit){
      console.log("yay!");
      userGuesses.textContent = "Correct, you got it!";
    }
    if(userGuess === computerFlower){
      console.log("yay!");
      userGuesses.textContent = "Correct, you got it!";
    }
});




startAgainButton.addEventListener("click", () => {
  firstLetter.disabled = true;
  startAgainButton.disabled = true;
  guessField.value = "";
  userGuesses.textContent = "";
  firstLetterClue.textContent = "";
  fishButton.classList.toggle("selected");
  fruitButton.classList.toggle("selected");
  flowerButton.classList.toggle("selected");

  fishButton.disabled = false;
  fruitButton.disabled = false;
  flowerButton.disabled = false;
})


function enableButtons (){
  firstLetter.disabled = false;
  // submitButton.disabled = false;
  startAgainButton.disabled = false;
}


/* Problems to solve:
- make buttons clickable 
- decide on design on buttons*/
