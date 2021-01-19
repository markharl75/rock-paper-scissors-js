
/*  This program simulates a simple rock paper scissors game through
    the debug console. User interface coming later. 

    To play, type gameActivity() into console, then enter your
    choice in the prompt every round. First to 5 wins!
    */


// function to return a random num between 0 and max inclusive
// Represents the computer choice for rock paper scissors
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


function computerPlay(){
    let cpuChoiceInt = getRandomInt(3);
    let cpuFinalChoice = '';
    
    switch(cpuChoiceInt){
        case 0:
            cpuFinalChoice = 'rock';
            break;

        case 1:
            cpuFinalChoice = 'paper';
            break;

        case 2:
            cpuFinalChoice = 'scissors';
            break;
    }

    return cpuFinalChoice;
}

//Plays one round of rock paper scissors based on computer
//and user input
function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //Lose criteria; 3 separate criteria for a loss in the conditional
    if((playerSelection === 'rock' && computerSelection === 'paper')
    || (playerSelection === 'paper' && computerSelection === 'scissors') 
    || (playerSelection === 'scissors' && computerSelection === 'rock')) 
    {
        return 'L';
    }
    //win criteria
    else if((playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock') 
    || (playerSelection === 'scissors' && computerSelection === 'paper')) 
    {
        return 'W';
    }
    //draw criteria
    else if(playerSelection===computerSelection){
        return "D"
    }else{
        return "Invalid inputs"
    }
}

function gameActivity(){

    let playerChoice;
    let computerChoice;

    let playerPoints=0;
    let computerPoints=0;

    while(playerPoints < 5 && computerPoints < 5){
        let playerChoiceInput = prompt("Enter rock, paper, or scissors!");

        computerChoice = computerPlay();
        playerChoice = playerChoiceInput;

        let roundResult = playRound(playerChoice, computerChoice);

        //for printing correct message based on win, loss, tie, or invalid input.
        //Also updates the points for both parties. 
        console.log(`\nComputer entered ${computerChoice}`);
        if (roundResult==='W'){
            console.log('You won this round!');  
            playerPoints++;
        } else if (roundResult==='L'){
            console.log('You lost this round!'); 
            computerPoints++;   
        } else if (roundResult==='D'){
            console.log('This round was a draw');
        } else {
            console.log('Invalid Input')
        }

        //to print player and computer points every round
        console.log(`Your points: ${playerPoints}`);
        console.log(`CPU points: ${computerPoints}`);

    }

    if(playerPoints > computerPoints){
        console.log("You won!");  
    } else if (playerPoints < computerChoice){
        console.log("You lost!");
    }
}


