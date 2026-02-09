console.log("running");

let correctNumber = 13;
let correctMessage = "You guessed right!";
let incorrectMessage = "Try again";

let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");
let guesses = document.querySelector("#guesses")

let guessCounter = 0;

//Can still write functions like this but can get redundant
// function displayWinMessage(){
//     guessResult.textContent = correctMessage;
//     guessResult.style.color = "green";
// }

//Short Hand to prevent having to write out long functions for Event Listeners
//Similar to how we have done it in Android Studio
guessButton.addEventListener("click", function(){
    
    if(correctNumber == guessInput.value){
        guessResult.textContent = correctMessage;
        guessResult.style.color = "green";
        guesses.textContent += guessInput.value;
        guessCounter += 1;
    }else {
        if(guessInput.value > correctNumber){
            guessResult.textContent = "Guess too high, " + incorrectMessage;
            guessResult.style.color = "red";
            guesses.textContent += guessInput.value + ", ";
            guessCounter += 1;
        }else {
            guessResult.textContent = "Guess too low, " + incorrectMessage;
            guessResult.style.color = "red";
            guesses.textContent += guessInput.value + ", ";
            guessCounter += 1;
        }
    }
    
});
