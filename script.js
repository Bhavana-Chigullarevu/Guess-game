let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too high!! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low!! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations!! You got it right";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please provide a valid user input!";
        gameResult.style.backgroundColor = "red";
    }

}