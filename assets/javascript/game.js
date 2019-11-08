// toDos: no css, spans fall out of order, no game winning fuctions

// initializing variables
let guess;
let guesses = [];
var wins;
var lives;
var correct = 0;
var valid;
var createSpan;
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
// array of possible hangman words
var countries = [
  "armenia",
  "azerbaijan",
  "russia",
  "belarus",
  "estonia",
  "georgia",
  "kazakhstan",
  "kyrgyzstan",
  "latvia",
  "lithuania",
  "moldova",
  "russia",
  "tajikistan",
  "turkmenistan",
  "ukraine",
  "uzbekistan"
];

// Start game at pageload function
window.addEventListener("load", event => {
  console.log("the page has loaded");
  board();
  wins = 0;
  lives = 10;
});

var guessArray = [];
// HTML elements
var livesElement = document.getElementById("lives");
var wordElement = document.getElementById("Word");
var gameOverElement = document.querySelector(".gameOver");
var allGuess = document.getElementById("guess");
var letter;
// var wordCreate = document.createElement("div");
var containerElement = document.getElementById("wordContainer");
// assigns random number
var rand = Math.floor(Math.random() * countries.length);
// creates random computer input and splits into array
var computerInput = countries[rand].split("");
console.log(computerInput);

// Creates answer Array
let answerArray = [];
for (var i = 0; i < computerInput.length; i++) {
  answerArray[i] = "_";
}

// creates spans for each letter
function board() {
  for (var i = 0; i < computerInput.length; i++) {
    letter = document.createElement("span");
    letter.id = "s" + i;
    letter.innerHTML = "_";
    wordElement.appendChild(letter);
  }
}

// Play Function
var keydownFunction = function(event) {
  guess = event.key;
  if (alphabet.includes(guess) === true) {
    iterateGuess(guess);
    wrongGuess(guess);
    gameOver();
  } else {
    console.log("badgu");
  }
};
document.addEventListener("keydown", keydownFunction);

// for loop to iterate through arrays
function iterateGuess(guess) {
  for (var i = 0; i < computerInput.length; i++) {
    if (guess === computerInput[i]) {
      correct++;
      guessRight(i);
    }
  }
}

// wrong guess function
function wrongGuess(guess) {
  if (computerInput.includes(guess) === false) {
    lives--;
    livesElement.innerHTML = lives;
    guessArray.push(guess);
    allGuess.innerHTML = guessArray;
  }
}

// when the player guesses right
function guessRight(x) {
  var guessPosition = x;
  guessArray.push(computerInput[x]);
  allGuess.innerHTML = guessArray;
  var rightGuess = document.getElementById("s" + guessPosition);
  rightGuess.innerHTML = computerInput[x];
}

// gameover function to reset
function gameOver() {
  if (lives <= 0) {
    gameOverElement.innerHTML = "Game Over Comrade";
    document.removeEventListener("keydown", keydownFunction);
  }
}

// Reset Function
var reset = document.addEventListener("click", function(event) {
  console.log(event);
  for (var i = 0; i < computerInput.length; i++) {
    var remove = document.getElementById("s" + i);
    wordElement.removeChild(remove);
  }
  lives = 10;
  board();
});
