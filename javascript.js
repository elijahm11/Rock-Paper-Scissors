function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let choice = "Rock";
    switch (num) {
        case 0:
        return choice = "Rock";
        break;
        case 1:
        return choice = "Paper";
        break;
        case 2:
        return choice = "Scissors";
        break;
    }
}
function capitalizeFirst(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}
function playRound(playerSelection, computerSelection) {
    playerSelection = capitalizeFirst(playerSelection)
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Paper") {
                return 0;
            }
            else if (computerSelection == "Scissors") {
                return 1;
            }
            else {
                return 2;
            }
        case "Paper":
            if (computerSelection == "Rock") {
                return 3;
            }
            else if (computerSelection == "Scissors") {
                return 4;
            }
            else {
                return 2;
            }
        case "Scissors":
            if (computerSelection == "Rock") {
                return 5;
            }
            else if (computerSelection == "Paper") {
                return 6;
            }
            else {
                return 2;
            }
    }
}
function game() {
    let cpuScore = 0;
    let userScore = 0;
    for (let i = 0; i < 5; i++) {
        let currentScore = `User: ${userScore} CPU: ${cpuScore}`;
        console.log(currentScore);
        choice = prompt("Rock, Paper or Scissors");
        computerChoice = getComputerChoice();
        result = playRound(choice, computerChoice);
        switch (result) {
            case 0:
                console.log("You Lose! Paper beats Rock");
                cpuScore++
                break;
            case 1:
                console.log("You Win! Rock beats Scissors");
                userScore++;
                break;
            case 2:
                console.log("Tie! No Points Awarded");
                break;
            case 3:
                console.log("You Win! Paper beats Rock");
                userScore++;
                break;
            case 4:
                console.log("You Lose! Scissors beats Paper");
                cpuScore++;
                break;
            case 5:
                console.log("You Lose! Rock beats Scissors");
                cpuScore++;
                break;
            case 6:
                console.log("You Win! Scissors beats Paper");
                userScore++;
                break;
        }
    }
    if (userScore > cpuScore) {
        console.log("You Win!");
    }
    else if (cpuScore > userScore) {
        console.log("You Lose!");
    }
    else {
        console.log("TIE!")
    }
}
function incrementScore(score) {
   return score++;
}
game();