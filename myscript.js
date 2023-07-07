function getComputerChoice() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      let x = getRandomInt(3);
      if (x==0) {
        return 'ROCK';
      }
      else if (x==1) {
        return 'PAPER';
      }
      else {
        return 'SCISSORS'
      }
}



function playRound () {

    let computerSelection = getComputerChoice();
    let playerSelection;
    
    do {
        playerSelection = prompt('Choose ROCK, PAPER or SCISSORS').toUpperCase();
    }
    while ((playerSelection !== 'ROCK') && (playerSelection !== 'PAPER') && (playerSelection !== 'SCISSORS'));

    if (computerSelection=='ROCK') {
        if (playerSelection=='ROCK') {
            return "It's a TIE";
        }
        else if (playerSelection=='PAPER') {
            return "You WIN";
        }
        else if (playerSelection=='SCISSORS') {
            return "Computer WINS";
        }
        else {
            return 'Incorrect Value'
        }
    }
    else if (computerSelection=='PAPER') {
        if (playerSelection=='PAPER') {
            return "It's a TIE";
        }
        else if (playerSelection=='SCISSORS') {
            return "You WIN";
        }
        else if (playerSelection=='ROCK') {
            return "Computer WINS";
        }
        else {
            return 'Incorrect Value'
        }
    }
    else if (computerSelection=='SCISSORS') {
        if (playerSelection=='SCISSORS') {
            return "It's a TIE";
        }
        else if (playerSelection=='ROCK') {
            return "You WIN";
        }
        else if (playerSelection=='PAPER') {
            return "Computer WINS";
        }
        else {
            return 'Incorrect Value'
        }
    }
    else {
        return 'Incorrect Value'
    }
}



function game(){
    let i=0;
    let computerScore=0;
    let playerScore=0;
    let gameres;
    do {
        i=i+1;
        console.log(i);
        gameres = playRound();
        if (gameres=="Computer WINS") {
            computerScore=computerScore+1;
        }
        else if (gameres=="You WIN") {
            playerScore=playerScore+1;
        }
        alert('Round ' + i + ' score:\n' + 'Computer: ' + computerScore + '\nPlayer: ' + playerScore);
    }
    while (i != 5)
    alert('GAME ENDED\nFINAL SCORE:\nComputer: ' + computerScore + '\nPlayer: ' + playerScore);
}

game();


