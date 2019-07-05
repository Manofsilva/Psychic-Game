
    {/* Creates an array that lists out all of the options (Rock, Paper, or Scissors). */}
   
    var possiblechoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"]

    {/* Creating variables to hold the number of wins, losses, and ties. They start at 0. */}
    
    var wins = 0;
    var losses = 0;
    var guessesSoFar = 9;
    var guessesLeft = 9;

    {/* Create variables that hold references to the places in the HTML where we want to display things. */}
  
    var winstext = document.getElementById("wins-text");
    var lossestext = document.getElementById("losses-text");
    var guessesleft = document.getElementById("guessesleft-text");
    var guessessofar = document.getElementById("guessessofar-text");

    {/* This function is run whenever the user presses a key. */}
    document.onkeyup = function(event) {}

      {/* Determines which key was pressed. */}
      
      var userGuess = event.key;

      {/* Randomly chooses a choice from the options array. This is the Computer's guess. */}
      
      var possibleGuess = possiblechoices[Math.floor(Math.random() * possibleChoices.length)];

      {/* Reworked our code from last step to use "else if" instead of lots of if statements. */}
     
      {/* This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number */}
      
        {/* Display the user and computer guesses, and wins/losses/ties. */}
