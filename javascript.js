
// Create the array

var possibleChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessesSoFar = [];
    var guessesLeft = 9;

  // Create variables that hold references to the places in the HTML where we want to display things.
  var winsText = document.getElementById("winsValue");
  winsText.innerHTML = wins;

  var lossesText = document.getElementById("lossesValue");
  lossesText.innerHTML = losses;
  
  var guessesLeftView = document.getElementById("guessesleftValue");
  guessesLeftView.innerHTML = guessesLeft;

  var guessesSoFarView = document.getElementById("guessessofarValue");
  guessesSoFarView.innerHTML = guessesSoFar.join(", ");

    
    //  This function is run whenever the user presses a key. 
        document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        guessesSoFar.push(userGuess);