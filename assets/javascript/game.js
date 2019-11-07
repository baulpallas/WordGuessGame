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

// HTML elements
var livesElement = document.getElementById("lives");
var wordElement = document.getElementById("Word");
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
  for (var i = 0; i < answerArray.length; i++) {
    letter = document.createElement("span");
    letter.id = i;
    letter.innerHTML = answerArray[i];
    wordElement.appendChild(letter);
  }
}
board();

// listens for user input of key and checks to make sure it is valid (in alphabet array)

var check = document.addEventListener("keydown", function(event) {
  guess = event.key;
  if (alphabet.includes(guess) === false) {
    valid = false;
  } else {
    iterateGuess(guess);
    rightOrWrong(guess);
  }
});

// for loop to determine how many
function iterateGuess(guess) {
  for (var i = 0; i < computerInput.length; i++) {
    if (guess === computerInput[i]) {
      correct++;
      console.log(correct);
      console.log(guess);
      guessRight(guess);
    }
  }
}

function rightOrWrong(guess) {
  if (computerInput.includes(guess) === true) {
  } else {
    lives--;
    livesElement.innerHTML = lives;
    return false;
  }
}

// when the player guesses right

function guessRight(x) {
  getAllIndexes(computerInput, x);
  var guessPosition = getAllIndexes(computerInput, x);
  answerArray.splice(guessPosition, 1, x);
  console.log(answerArray);
  var rightGuess = document.getElementById(guessPosition);
  rightGuess.innerHTML = x;
  wordElement.appendChild(rightGuess);
}

//finding duplicates
function getAllIndexes(arr, val) {
  var duplicateIndexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) duplicateIndexes.push(i);
  return duplicateIndexes;
}
