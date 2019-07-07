var possibleChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    /* Creating variables to hold the number of wins, losses, and ties. They start at 0. */
    var wins = 0;
    var losses = 0;
    var guessesSoFar = [];
    var guessesLeft = 9;

    /* Create variables that hold references to the places in the HTML where we want to display things. */

    /* This function is run whenever the user presses a key. */
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        guessesSoFar.push(userGuess);
       
        // document.body.appendChild(winstext);
        // document.write(winstext);
        var possibleGuess = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];


        if(userGuess === possibleGuess){
            wins++;
        }
        else {
            losses++;
            guessesLeft--;
        }

        if(guessesLeft === 0){
            reset();
        }

        var winsText = document.getElementById("winsValue");
        winsText.innerHTML = wins;

        var lossesText = document.getElementById("lossesValue");
        lossesText.innerHTML = losses;

        var guessesLeftView = document.getElementById("guessesleftValue");
        guessesLeftView.innerHTML = guessesLeft;

        var guessesSoFarView = document.getElementById("guessessofarValue");
        guessesSoFarView.innerHTML = guessesSoFar.join(", ");
    };

    var reset = function(){
        wins = 0;
        guessesLeft = 9;
        guessesSoFar = [];
    } 

    
      /* Determines which key was pressed. */

      /* Randomly chooses a choice from the options array. This is the Computer's guess. */
      
    //   var possibleGuess = possiblechoices[Math.floor(Math.random() * possibleChoices.length)];

      /* Reworked our code from last step to use "else if" instead of lots of if statements. */
     
      /* This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number */
      
        /* Display the user and computer guesses, and wins/losses/ties. */
