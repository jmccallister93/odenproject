
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
    if ((playerChoice === "rock" || "paper" || "scissors")) {
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
    } else {
        alert('Not valid'); 
        return result = false;
    }
    
}


function game(){
    playRound();
    if (result === false){

    } else {
        if (result === 'Tie'){
            resultMessage = (`${playerChoice} = ${compChoice}. You Tied!`);
        } else if(result === 'Lose'){
            resultMessage = (`${playerChoice} < ${compChoice}. You Lose!`);
        } else if(result === 'Win'){
            resultMessage = (`${playerChoice} < ${compChoice}. You Win!`);
        }
        alert(resultMessage);
        changeScore();
    }
}

let score = document.querySelector(".score");
score.value = 0;
score.textContent = score.value;

function changeScore(){

    if (result === 'Tie'){
        score.textContent = score.value;
    } else if(result === 'Lose'){
        score.textContent = score.value -= 1;
    } else if(result === 'Win'){
        score.textContent = score.value += 1;
    }
    console.log(score.value)
}

const button1 = document.querySelector(".btn-1");

button1.addEventListener("click", (e) => {
    game();
});