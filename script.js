

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

    //Lose criteria; 3 separate criteria for a loss in the conditional
    if((playerSelection === 'rock' && computerSelection === 'paper')
    || (playerSelection === 'paper' && computerSelection === 'scissors') 
    || (playerSelection === 'scissors' && computerSelection === 'rock')) 
    {
        return 'You lost this round!';
    }
    //win criteria
    else if((playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock') 
    || (playerSelection === 'scissors' && computerSelection === 'paper')) 
    {
        return 'You won this round!';
    }
    else{
        return "this round was a draw!"
    }
}


