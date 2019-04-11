// Global Variables
// Arrays and variables for holding data

var wordOptions = ["mario", "captain falcon", "pit"]
var selectedWord = "";
var lettersinWord =[];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongLetters = [];

// Game Counters

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;


// Functions

function startGame(){
  selectedWord =wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersinWord = selectedWord.split("");
  numBlanks = lettersinWord.length;

  // Reset

  guessesLeft = 9;
  wrongLetters = [];
  blankAndSuccesses = [];

  // Populate blanks and successes with right number of blanks

  for(var i = 0; i<numBlanks; i++ ){
    blankAndSuccesses.push("_");
  }

  // Change Html to refelct game round conditiongs

document.getElementById("wordtoGuess").innerHTML = blankAndSuccesses.join(" ");
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount;



  // Testing /  Debuggin
  console.log(selectedWord);
  console.log(lettersinWord);
  console.log(numBlanks);
  console.log(blankAndSuccesses);




}

function checkLetters(letter){

  var isLetterInWord = false;

  for(var i=0; i<numBlanks; i++){
    if(selectedWord[i] == letter){
      isLetterInWord = true;
      alert("Letter found")
    }
  }

  if (isLetterInWord) {

   for(var i=0; i<numBlanks; i++){
    if(selectedWord[i] == letter){
      blankAndSuccesses[i] = letter;
    }
  }

  }

  else{
    wrongLetters.push(letter);
    guessesLeft -- 
  }

  console.log(blankAndSuccesses);

}

function roundComplete(){
  console.log("Win Count: " + winCount + "| Loss Count: " + lossCount + "| Gusses Left: " + guessesLeft);

    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordtoGuess").innerHTML = blankAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
    

  // check if user one

  if (lettersinWord.toString()== blankAndSuccesses.toString()) {
   winCount ++;
   alert("You Won!")

    document.getElementById("winCounter").innerHTML = winCount;

   startGame();

  }

  else if(guessesLeft == 0){
    lossCount ++;
    alert("You lost!");
    document.getElementById("lossCounter").innerHTML = lossCount;

   startGame();


  }


}

//  Main Proccess

startGame();


document.onkeyup = function(event){
  var letterGussed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGussed);
  roundComplete();


   /// testing
  console.log(letterGussed);
}
