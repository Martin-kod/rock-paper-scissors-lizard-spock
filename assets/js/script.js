/**
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("buttons");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const message = document.getElementById("message-area");
const choice = ["rock", "paper", "scissors", "lizard", "spock"];

/**
 * Add eventListeners to all buttons
 */
document.addEventListener("DOMContentLoaded", function() {
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-type");
            runGame(playerChoice);
        });
    };
});

/**
 * Main game function which accepts one parameter,
 * the data-type of the selected button
 */
function runGame(playerChoice) {

    playerImage.src = `assets/images/${choice[playerChoice]}.png`;
    playerImage.alt = choice[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choice[computerChoice]}.png`;
    computerImage.alt = choice[computerChoice];

    let result = checkWinner(choice[playerChoice], choice[computerChoice]);
    message.textContent = result;
    updateScores(result);
}

/**
 * Checks to see who the winner is, accepts two strings 
 * which are logically checked, first if the strings are the same,
 * then according to whether the player chooses "rock", "paper", 
 * "scissors", "lizard" or "spock" respectively
 */
function checkWinner(choice1, choice2) {
    
    if (choice1 === choice2) {
        return "draw";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "player wins";
        } else if (choice2 === "lizard") {
            return "player wins";
        } else {
            return "computer wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "spock") {
            return "player wins";
        } else if (choice2 === "rock") {
            return "player wins";
        } else {
            return "computer wins";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "player wins";
        } else if (choice2 === "lizard") {
            return "player wins";
        } else {
            return "computer wins";
        }
    } else if (choice1 === "lizard") {
        if (choice2 === "spock") {
            return "player wins";
        } else if (choice2 === "paper") {
            return "player wins";
        } else {
            return "computer wins";
        }
    } else if (choice1 === "spock") {
        if (choice2 === "rock") {
            return "player wins";
        } else if (choice2 === "scissors") {
            return "player wins";
        } else {
            return "computer wins";
        } 
    } else {
        alert("Unkown result");
        throw "Unkown result. Aborting";
    }

}

/**
 * Updates the score, accepts a string as parameter and changes
 * playerScore or computerScore according to it
 */
function updateScores(scoring) {

    if (scoring === "draw") {
        
    } else if (scoring === "computer wins") {
        let oldComputerScore = computerScore.innerText;
        computerScore.innerText = ++oldComputerScore;
    } else if (scoring === "player wins") {
        let oldPlayerScore = playerScore.innerText;
        playerScore.innerText = ++oldPlayerScore;
    } else {
        alert("Unkown scoring");
        throw "Unkown scoring. Aborting";
    }

}