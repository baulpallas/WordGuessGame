// toDos: no css, spans fall out of order, no game winning fuctions

// initializing variables
let guess;
var guessArray = [];
var wins;
var losses;
var lives;
var correct = 0;
var valid;
var containerElement;
var computerInput;
var rand;
var createSpan;
var currentlyPlaying;
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

var computerSelection = computerPick();
console.log(computerSelection);

// Start game at pageload function
function startRound() {
  board();
  computerPick();
  // keydownFunction();
  wins = 0;
  lives = 10;
  guessArray.length = 0;
  document.addEventListener("keydown", keydownFunction);
}

window.addEventListener("load", event => {
  startRound();
});

// HTML elements
var livesElement = document.getElementById("lives");
var wordElement = document.getElementById("Word");
var winsElement = document.getElementById("wins");
var lossesElement = document.getElementById("losses");
var gameOverElement = document.querySelector(".gameOver");
var allGuess = document.getElementById("guess");
var letter;
// var wordCreate = document.createElement("div");

function computerPick() {
  containerElement = document.getElementById("wordContainer");
  // assigns random number
  rand = Math.floor(Math.random() * countries.length);
  // creates random computer input and splits into array
  computerInput = countries[rand].split("");
  return computerInput;
}

// creates spans for each letter
function board() {
  for (var i = 0; i < computerSelection.length; i++) {
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
    console.log("what?");
  }
};
document.addEventListener("keydown", keydownFunction);

// for loop to iterate through arrays
function iterateGuess(guess) {
  for (var i = 0; i < computerSelection.length; i++) {
    if (guess === computerSelection[i]) {
      correct++;
      guessRight(i);
    }
  }
}

// wrong guess function
function wrongGuess(guess) {
  if (computerSelection.includes(guess) === false) {
    lives--;
    livesElement.innerHTML = lives;
    guessArray.push(guess);
    allGuess.innerHTML = guessArray;
  }
}

// when the player guesses right
function guessRight(x) {
  var guessPosition = x;
  guessArray.push(computerSelection[x]);
  allGuess.innerHTML = guessArray;
  var rightGuess = document.getElementById("s" + guessPosition);
  rightGuess.innerHTML = computerSelection[x];
  win(x);
}

// Wins function

function win() {
  if (correct === computerSelection.length) {
    wins++;
    winsElement.innerHTML = wins;
  }
}

function loss() {
  if (lives <= 0) {
    losses++;
    lossesElement.innerHTML = losses;
  }
}

// gameover function to reset
function gameOver() {
  if (lives <= 0) {
    gameOverElement.innerHTML = "▵ Game Over Comrade ▵";
    document.removeEventListener("keydown", keydownFunction);
  }
  currentlyPlaying = false;
}

// Reset Function
var reset = document.addEventListener("click", function(event) {
  startRound();
  for (var i = 0; i < computerSelection.length; i++) {
    var remove = document.getElementById("s" + i);
    wordElement.removeChild(remove);
  }
  livesElement.innerHTML = 10;
  guesses = [];
  if (currentlyPlaying === false) {
    gameOverElement.innerHTML = "";
    allGuess.innerHTML = "";
  }
});
