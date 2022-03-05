/*Create categoryButtons*/
const fishButton = document.querySelector('#fishButton');
const fruitButton = document.querySelector('#fruitButton');
const flowerButton = document.querySelector('#flowerButton');
const first = document.querySelector('#first');

first.disabled = false;


/*button.addEventListener('click', () => {
    button.disabled = true;
  });*/


first.addEventListener('click', function (e) => {
    e.target.style.background = 'green';
  });



fruitButton.addEventListener('click', () => {
    console.log("Banana");
});

flowerButton.addEventListener('click', () => {
    console.log("Tulip");
  });  

/* Problems to solve:
- make buttons clickable 
- decide on design on buttons
