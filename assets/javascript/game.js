// toDos: no css, spans fall out of order, no game winning fuctions

// initializing variables
var currentlyPlaying;
let guess;
let guesses = [];
var wins = 0;
var lives = 10;
var correct = 0;
var duplicate1;
var duplicate2;
var duplicate3;
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

window.addEventListener("load", event => {
  currentlyPlaying = true;
  return currentlyPlaying;
});
var guessArray = [];
// HTML elements
var livesElement = document.getElementById("lives");
var wordElement = document.getElementById("Word");
var allGuess = document.getElementById("guess");
var letter;
// var wordCreate = document.createElement("div");
var containerElement = document.getElementById("wordContainer");
// assigns random number
var rand = Math.floor(Math.random() * countries.length + 1);
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
board();

// Click function
var clickFunction = document.addEventListener("keydown", function(event) {
  guess = event.key;
  if (alphabet.includes(guess) === false) {
    valid = false;
  } else {
    iterateGuess(guess);
    wrongGuess(guess);
    gameOver();
  }
});

// for loop to iterate through arrays
function iterateGuess(guess) {
  for (var i = 0; i < computerInput.length; i++) {
    if (guess === computerInput[i]) {
      correct++;
      console.log(correct);
      console.log(guess);
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
    return false;
  }
}

// when the player guesses right
function guessRight(x) {
  var guessPosition = x;
  guessArray.push(computerInput[x]);
  allGuess.innerHTML = guessArray;
  answerArray.splice(guessPosition, 1, computerInput[x]);
  console.log(answerArray);
  var rightGuess = document.getElementById("s" + guessPosition);
  rightGuess.innerHTML = computerInput[x];
}

function gameOver() {
  if (lives <= 0) {
    console.log("gameover");
  }
}

var reset = document.addEventListener("click", function(event) {
  lives = 10;
});
