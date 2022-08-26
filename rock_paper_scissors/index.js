
function userInput(){
    playerChoice = prompt("Enter your choice")
}

function computerChoice(){
    compChoices = ["rock", "paper", "scissors"];;
    compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
    return compChoice;
}

function playRound() {
    userInput();
    computerChoice();
    if (compChoice === "rock" && playerChoice === "rock") {
        result = 'Tie';
    } else if (compChoice === "paper" && playerChoice === "papper") {
        result = 'Tie';
    } else if (compChoice === "scissors" && playerChoice === "scissors") {
        result = 'Tie';
    } else if (compChoice === "rock" && playerChoice === "scissors") {
        result = 'Lose';
    } else if (compChoice === "paper" && playerChoice === "rock") {
        result = 'Lose';
    } else if (compChoice === "scissors" && playerChoice === "paper") {
        result = 'Lose';
    } else if (compChoice === "rock" && playerChoice === "paper") {
        result = 'Win';
    } else if (compChoice === "paper" && playerChoice === "scissors") {
        result = 'Win';
    } else if (compChoice === "scissors" && playerChoice === "rock") {
        result = 'Win';
    }
    return result
}

function game(){
    for (let i = 1; i<=5; i++){
        playRound();
        if (result === 'Tie'){
            resultMessage = (`${playerChoice} = ${compChoice}. You Tied!`);
        } else if(result === 'Lose'){
            resultMessage = (`${playerChoice} < ${compChoice}. You Lose!`);
        } else if(result === 'Win'){
            resultMessage = (`${playerChoice} < ${compChoice}. You Win!`);
        }
        console.log(resultMessage);
    }
}

game()