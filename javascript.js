//Rock Paper Scissors program
console.log('Welcome to Rock, Paper, Scissors!');
console.log('Enough of this simple talk, lets do this! Best of 5 rounds!');

//Function that generates a random choice of Rock, Paper, or Scissors
function getComputerChoice() {
    const gameArray = ['Rock', 'Paper', 'Scissors'];
    return randomChoice = gameArray[Math.floor(Math.random()*gameArray.length)];
}


//Function that makes the players choice case-insensitive
function caseInsensitive(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

//Function that contains switch statement that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            return('Tie!');
            break;

        case playerSelection  === 'Rock' && computerSelection === 'Paper':
            compScore++;
            return('You lose! Beat by the paper!');
            break;

        case playerSelection  === 'Rock' && computerSelection === 'Scissors':
            playerScore++;
            return('You win! Your rock destroyed my scissors!');
            break;
    
        case playerSelection  === 'Paper' && computerSelection === 'Scissors':
            compScore++;
            return('You lose! Scissors cuts paper!');
            break;

        case playerSelection  === 'Paper' && computerSelection === 'Rock':
            playerScore++;
            return('You win! Paper covers rock!');
            break;

        case playerSelection === 'Scissors' && computerSelection === 'Rock':
            compScore++;
            return('You lose! Rock smashes scissors!');
            break;

        case playerSelection  === 'Scissors' && computerSelection === 'Paper':
            playerScore++;
            return('You win! Cut that paper right in half!');
            break;

        default:
                    return('Thats not a valid choice!');
    }
}


let playerScore = 0;
let compScore = 0;

//For loop that plays 5 rounds of Rock Paper Scissors and keeps score
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        let playerSelection = caseInsensitive(prompt("Whats your choice?"));
        console.log('Your choice: ', playerSelection);
        console.log('Computer Choice: ', computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log('Your Score: ', playerScore);
        console.log('Computer Score:', compScore);
            }
    }

game();

//If condition that will do a comparison of the scores to notify the player if they won/lost/tied
if (playerScore === compScore) {
    console.log("This match ends in a tie!");
 } else if(playerScore > compScore) {
    console.log("You are victorious!");
 } else {
    console.log("You lost the match!");
 }