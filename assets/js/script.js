const buttons = document.getElementsByClassName("buttons");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const message = document.getElementById("message-area");
const choice = ["rock", "paper", "scissors", "lizard", "spock"];

document.addEventListener("DOMContentLoaded", function() {
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-type");
            runGame(playerChoice);
        });
    };
});

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

function updateScores(scoring) {

    if (scoring === "draw") {
        
    } else if (scoring === "computer wins") {
        let oldComputerScore = computerScore.innerText;
        computerScore.innerText = ++oldComputerScore;
    } else if (scoring === "player wins") {
        let oldPlayerScore = playerScore.innerText;
        playerScore.innerText = ++oldPlayerScore;
    } else {
        console.log("invalid result");
    }

}