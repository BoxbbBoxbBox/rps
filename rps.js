let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let i = 1;

function getComputerChoice() {
    let choice = Math.random();
    let computerResult;
    if (choice <= .333) {
        computerResult = "Rock";
    } else if (choice <= .666) {
        computerResult = "Paper";
    } else {
        computerResult = "Scissors";
    }
    return computerResult;
}

// function getHumanChoice() {
//     let hChoice = prompt("Rock, Paper, or Scissors?");
//     let humanResult;
//     if (hChoice.toLowerCase() === "rock") {
//         humanResult = "Rock";
//     } else if (hChoice.toLowerCase() === "paper") {
//         humanResult = "Paper";
//     } else if (hChoice.toLowerCase() === "scissors") {
//         humanResult = "Scissors";
//     } else humanResult = "Error";
//     return humanResult;
// }

function playRound() {
    let humanResult = humanChoice;
    let computerResult = getComputerChoice();
    let outcome = document.querySelector(".outcome")
    let linebreak = document.createElement("br");
    if (humanResult === "Rock" && computerResult === "Rock"){
        outcome.append(linebreak);
        outcome.append(i + ". Rock Tie!");
    } else if (humanResult === "Paper" && computerResult === "Paper"){
        outcome.append(linebreak);
        outcome.append(i + ". Paper Tie!");
    } else if (humanResult === "Scissors" && computerResult === "Scissors"){
        outcome.append(linebreak);
        outcome.append(i + ". Scissors Tie!");
    } else if (humanResult === "Rock" && computerResult === "Paper"){
        outcome.append(linebreak);
        outcome.append(i + ". You lose - Paper covers Rock.");
        computerScore++;
    } else if (humanResult === "Rock" && computerResult === "Scissors"){
        outcome.append(linebreak);
        outcome.append(i + ". You win! Rock smashes Scissors.");
        humanScore++;
    } else if (humanResult === "Paper" && computerResult === "Rock"){
        outcome.append(linebreak);
        outcome.append(i + ". You win! Paper covers Rock.");
        humanScore++;
    } else if (humanResult === "Paper" && computerResult === "Scissors"){
        outcome.append(linebreak);
        outcome.append(i + ". You lose - Scissors cuts Paper.");
        computerScore++;
    } else if (humanResult === "Scissors" && computerResult === "Rock"){
        outcome.append(linebreak);
        outcome.append(i + ". You lose - Rock smashes Scissors.");
        computerScore++;
    } else if (humanResult === "Scissors" && computerResult === "Paper"){
        outcome.append(linebreak);
        outcome.append(i + ". You win! Scissors cuts Paper.");
        humanScore++;
    } else outcome.append("Error");
    i++;
}



// playRound();
// alert(humanScore + " to " + computerScore);
// playRound();
// alert(humanScore + " to " + computerScore);
// playRound();
// alert(humanScore + " to " + computerScore);
// playRound();
// alert(humanScore + " to " + computerScore);
// playRound();
// alert(humanScore + " to " + computerScore);

// outcome.append(playRound());
// if (playRound === 1){
//     humanScore++;
//     } else if (playRound === 2) {
//     computerScore++;
//     } else {humanScore++;
//         computerScore++;
// }
// alert(humanScore + " to " + computerScore);

const rockButton = document.querySelector(".Rock");
rockButton.addEventListener("click", () => {
    humanChoice = 'Rock';
    playRound();
    score.textContent = "The score is " + humanScore + " to " + computerScore;
    if (humanScore === 5) {
        alert("The Human Wins!");
    }
    if (computerScore === 5) {
        alert("The Robot Wins!");
    }
});

const paperButton = document.querySelector(".Paper");
paperButton.addEventListener("click", () => {
    humanChoice = 'Paper';
    playRound();
    score.textContent = "The score is " + humanScore + " to " + computerScore;
    if (humanScore === 5) {
        alert("The Human Wins!");
    }
    if (computerScore === 5) {
        alert("The Robot Wins!");
    }
});

const scissorsButton = document.querySelector(".Scissors");
scissorsButton.addEventListener("click", () => {
    humanChoice = 'Scissors';
    playRound();
    score.textContent = "The score is " + humanScore + " to " + computerScore;
    if (humanScore === 5) {
        alert("The Human Wins!");
    }
    if (computerScore === 5) {
        alert("The Robot Wins!");
    }
});

const score = document.querySelector(".score");
// score.append(humanScore + " to " + computerScore);

