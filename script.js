/*Create categoryButtons*/
const fishButton = document.querySelector("#fish-button");
const fruitButton = document.querySelector("#fruit-button");
const flowerButton = document.querySelector("#flower-button");
const firstLetter = document.querySelector("#first-letter");
const startAgainButton = document.querySelector("#start-again-button");
const userGuesses = document.querySelector(".userGuesses");
const guessResponses = document.querySelector(".guessResponses")
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
  firstLetterClue.textContent = `First letter: ${computerChoice[0]}`;
  guessField.focus();
});

fishButton.addEventListener("click", () => {
  fishButton.classList.add("selected");
  fruitButton.classList.add("unselected");
  flowerButton.classList.add("unselected");
  enableButtons();
  guessField.focus();
  fruitButton.disabled = true;
  flowerButton.disabled = true;

  chooseAnswer(fishArray);
});

fruitButton.addEventListener("click", () => {
  fruitButton.classList.add("selected");
  fishButton.classList.add("unselected");
  flowerButton.classList.add("unselected");

  enableButtons();
  guessField.focus();
  fishButton.disabled = true;
  flowerButton.disabled = true;
  chooseAnswer(fruitArray);
});

flowerButton.addEventListener("click", () => {
    flowerButton.classList.add("selected");
    fishButton.classList.add("unselected");
    fruitButton.classList.add("unselected");
    
    enableButtons();
    guessField.focus();
    fruitButton.disabled = true;
    fishButton.disabled = true;
  
    chooseAnswer(flowerArray);
  });  

 

let counter = 0;

guessSubmit.addEventListener("click", () => {
    const userGuess = guessField.value;
    if(userGuess.toUpperCase() === computerChoice.toUpperCase()){
      guessResponses.textContent = `Correct, you got it! It was ${computerChoice}`;
      firstLetter.disabled = true;
      guessSubmit.disabled = true;
      guessField.disabled = true;
      firstLetterClue.textContent = "";
      counter++;
    } else if((userGuess === "")||(userGuess === " ")){
      guessResponses.textContent = "Please submit a guess";
      guessField.focus();
    } else {
      guessResponses.textContent = "Incorrect guesses:";
      guessField.value = "";
      const userGuessPrint = document.createElement("p");
      userGuessPrint.textContent = userGuess;
      userGuesses.appendChild(userGuessPrint);
      guessField.focus();
      counter++;
    }

    if(counter === 20){
      guessResponses.textContent = `Too many guesses you lose, it was ${computerChoice}`;
      firstLetter.disabled = true;
      guessSubmit.disabled = true;
      guessField.disabled = true;
    }
    
});




startAgainButton.addEventListener("click", () => {
  firstLetter.disabled = true;
  startAgainButton.disabled = true;
  guessField.value = "";
  guessResponses.textContent = "";
  userGuesses.textContent = "";
  firstLetterClue.textContent = "";
  //fishButton.classList.toggle("selected");
  //fruitButton.classList.toggle("selected");
  //flowerButton.classList.toggle("selected");
  fishButton.classList.remove("selected");
  fruitButton.classList.remove("selected");
  flowerButton.classList.remove("selected");
  fishButton.classList.remove("unselected");
  fruitButton.classList.remove("unselected");
  flowerButton.classList.remove("unselected");

  fishButton.disabled = false;
  fruitButton.disabled = false;
  flowerButton.disabled = false;
  guessSubmit.disabled = true;
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
