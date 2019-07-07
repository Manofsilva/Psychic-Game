
// Create the array

var possibleChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessesSoFar = [];
    var guessesLeft = 9;

  
    // This function is run whenever the user presses a key.

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        guessesSoFar.push(userGuess);
        guessesLeft--;
       
        // variable for generating random letter from array

        var possibleGuess = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

        // create if statements

        if(userGuess === possibleGuess){
            wins++;
            alert("How did you know?!?");
        }
        
        if(guessesLeft === 0){
            losses++;
            alert("You are not a psychic!");
            reset();
        }

        // variables to update the HTML page

        var winsText = document.getElementById("winsValue");
        winsText.innerHTML = wins;

        var lossesText = document.getElementById("lossesValue");
        lossesText.innerHTML = losses;

        var guessesLeftView = document.getElementById("guessesleftValue");
        guessesLeftView.innerHTML = guessesLeft;

        var guessesSoFarView = document.getElementById("guessessofarValue");
        guessesSoFarView.innerHTML = guessesSoFar.join(", ");
    };

        // reset function

    var reset = function(){
        wins = 0;
        guessesLeft = 9;
        guessesSoFar = [];
    } 