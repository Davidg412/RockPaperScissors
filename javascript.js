//Rock Paper Scissors program
console.log('Welcome to Rock, Paper, Scissors!');
console.log('Enough of this simple talk, lets do this!');

//Function that generates a random choice of Rock, Paper, or Scissors
function getComputerChoice() {
    const gameArray = ['Rock', 'Paper', 'Scissors'];
    return randomChoice = gameArray[Math.floor(Math.random()*gameArray.length)];
}



//Function that makes the players choice case-insensitive
function caseInsensitive(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

const playerSelection = caseInsensitive('rOcK');
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);


//let playerChoice = playerChoice();



//Function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            return('Tie!');
            break;

        case playerSelection  === 'Rock' && computerSelection === 'Paper':
            return('You lose! Beat by the paper!');
            break;

        case playerSelection  === 'Rock' && computerSelection === 'Scissors':
                return('You win! Your rock destroyed my scissors!');
                break;
    
        case playerSelection  === 'Paper' && computerSelection === 'Scissors':
                    return('You lose! Scissors cuts paper!');
                    break;

        case playerSelection  === 'Paper' && computerSelection === 'Rock':
                        return('You win! Paper covers rock!');
                        break;

         case playerSelection === 'Scissors' && computerSelection === 'Rock':
                            return('You lose! Rock smashes scissors!');
                            break;

        case playerSelection  === 'Scissors' && computerSelection === 'Paper':
                                console.log('You win! Cut that paper right in half!');
                                break;

        default:
                    return('Thats not a valid choice!');
    }
}

console.log(playRound(playerSelection, computerSelection));
 //let randomChoice = getComputerChoice();

//Gets players choice
//function playerChoice() {
  //let playerChoice = prompt('Rock, Paper, or Scissors?' );
  //return playerChoice;