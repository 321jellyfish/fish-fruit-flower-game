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

let computerChoice = "";

guessField.disabled = true;
guessSubmit.disabled = true;
firstLetter.disabled = true;
// submitButton.disabled = true;
startAgainButton.disabled = true;

let fishArray=["Anchovy", "Bass", "Carp", "Catfish", "Clam", "Cod", "Crab", "Flounder", "Haddock", "Hake", "Halibut", "Herring", "Lobster",
"Mackerel", "Oyster", "Perch", "Plaice", "Pollock", "Rainbow trout", "Salmon", "Sardine", "Scallop", "Shark", "Swordfish", "Tuna",
"Whiting"];

let fruitArray=["Apple", "Apricot", "Avocado", "Banana", "Blueberry", "Cherry", "Cranberry", "Currant", "Date", "Fig", "Grape", "Grapefruit", "Kiwi", 
"Lemon", "Lime", "Lychee", "Mango", "Nectarine", "Orange", "Papaya", "Passion fruit", "Peach", "Pear", "Pineapple", "Plum", "Pomegranate", "Raspberry",
"Strawberry", "Tangerine", "Watermelon"];

let flowerArray=["Anemone", "Aster", "Azalea", "Buttercup", "Carnation", "Chrysanthemum", "Crocus", "Daffodil", "Dahlia", "Hyacinth", "Lilac", "Lily",
"Marigold", "Peony", "Pansy", "Snapdragon", "Tulip"];



firstLetter.addEventListener("click", () => {
  firstLetterClue.textContent = computerChoice[0];
});

fishButton.addEventListener("click", () => {
  //fishButton.classList.add("selected");
  enableButtons();
  guessField.focus();
  fruitButton.disabled = true;
  flowerButton.disabled = true;

  chooseAnswer(fishArray);
});

fruitButton.addEventListener("click", () => {
  //fruitButton.classList.add("selected");
  enableButtons();
  guessField.focus();
  fishButton.disabled = true;
  flowerButton.disabled = true;
  chooseAnswer(fruitArray);
});

flowerButton.addEventListener("click", () => {
    //flowerButton.classList.add("selected");
    enableButtons();
    guessField.focus();
    fruitButton.disabled = true;
    fishButton.disabled = true;
  
    chooseAnswer(flowerArray);
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
  startAgainButton.disabled = false;
  guessField.disabled = false;
  guessSubmit.disabled = false;    
}

function chooseAnswer(answerArray){
  let randomNumber = Math.floor((Math.random() * answerArray.length));
  console.log(randomNumber);
  computerChoice = answerArray[randomNumber];
  console.log({computerChoice});
  return computerChoice;
}


/* Problems to solve:
- make buttons clickable 
- decide on design on buttons*/
