<script type="text/javascript">
    
//declared variables that start the game    
var artistNames = ["degas", "davinci", "basquiat", "kaws"];

var currentWord = artistNames[Math.floor(Math.random() * artistNames.length)];

var dashesArray = []; //

var numberGuessesLeft = 4; //id: guesses-remaining

var dashSection = document.getElementById("dashes");


                var wins = 0;

var lettersGuessedArray = []; //id- letters-guessed (should have same markup as dashes)

                var gameOver = false;


// creating variables for html id's
      var innerContainer = document.getElementById("inner-container");

     var trackUserText = document.getElementById("user-text");
      
      var trackLettersGuessed = document.getElementById("letters-guessed");
    
      var trackGuessesRemaining = document.getElementById("guesses-remaining");

      var trackNumberDashes = document.getElementById("dashes-shown");

function gameOverMessage(){
        alert("GAME OVER! Do you want to start over?");
     }


// line of dashes
for(var i = 0; i < currentWord.length; i++){

    var spanTag = document.createElement("span");
    spanTag.innerHTML = '-';
    spanTag.setAttribute('id', 'letter' + i);
    dashSection.appendChild(spanTag);

}


// tracking user input  "you guessed..."
document.onkeydown = function(event) {
    var currentGuess = event.key;
    trackUserText.textContent = event.key;

    
    
            if(numberGuessesLeft === -1){
     
                 numberGuessesLeft = 4;
            }


    
    for (var j = 0; j < currentWord.length; j++) {

     //show correct letters in dashes
         if (event.key === currentWord[j]) {
             
             var testArray = [];

             testArray.push(currentWord[j]);
                 
                 // (NOT SURE WHAT THE NEXT STEP IS. STUCK AT GETTING DASHES TO CHANGE TO CORRECT GUESS)

                  //dashesArray[i] = testArray[i];  
                 
                 //dashSection.textContent = SOMETHING HAS TO BE PUT HERE?
                 console.log(testArray);


             //dashesArray[i] = currentWord[j];

         }
    }

    var currentIndex = currentWord.indexOf(currentGuess);
    var wordArray = currentWord.split('');

    if (currentIndex > -1) {
        //$(".letter" + currentIndex).text(currentGuess);
        var dashIndex = document.getElementById('letter' + currentIndex);
        dashIndex.innerHTML = wordArray[currentIndex];
    } else {
        numberGuessesLeft--;

        lettersGuessedArray.push(event.key.toUpperCase());
        trackLettersGuessed.textContent = lettersGuessedArray.toString() ;
    }
    trackGuessesRemaining.textContent = numberGuessesLeft;

    

};

     //how do I add on letters for each time a guess is made?



//"letters guessed already..."
document.onkeypress = function() {
    
    //console.log(lettersGuessedArray);
    // lettersGuessedArray.push(event.key.toUpperCase());
    //    trackLettersGuessed.textContent = lettersGuessedArray.toString() ;

        if(numberGuessesLeft === 0){ //not working
        lettersGuessed = " ";
    }

 
};



</script> 
