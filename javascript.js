//Rock Paper Scissors program
console.log('Welcome to Rock, Paper, Scissors!');
console.log('Enough of this simple talk, lets do this!');

//Function that generates a random choice of Rock, Paper, or Scissors
function getComputerChoice() {
    const gameArray = ['Rock', 'Paper', 'Scissors'];
    return randomChoice = gameArray[Math.floor(Math.random()*gameArray.length)];
}

console.log(getComputerChoice());

 //let randomChoice = getComputerChoice();

//Gets players choice
//function playerChoice() {
  //let playerChoice = prompt('Rock, Paper, or Scissors?' );
  //return playerChoice;
//}

//Function that makes the players choice case-insensitive
function caseInsensitive(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

const playerSelection = caseInsensitive('rOcK');
const computerSelection = getComputerChoice();
console.log(playerSelection);


//let playerChoice = playerChoice();



//Function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    switch (true) {
    //    case playerChoice === randomChoice:
      //      console.log('Tie!');
        //    break;
//
  //      case playerChoice === 'Rock' && randomChoice === 'Paper':
    //        console.log('You lose! Beat by the paper');
      //      break;
//
  //      case playerChoice === 'Rock' && randomChoice === 'Scissors':
    //            console.log('You win! Your rock destroyed my scissors');
      //          break;
        //
       // case playerChoice === 'Paper' && randomChoice === 'Scissors':
         //           console.log('You lose! Scissors cuts paper!');
           //         break;
//
  //      case playerChoice === 'Paper' && randomChoice === 'Rock':
    //                    console.log('You win! Paper covers rock');
      //                  break;
//
  //       case playerChoice === 'Scissors' && randomChoice === 'Rock':
    //                        console.log('You lose! Rock smashes scissors');
      //                      break;
//
  //      case playerChoice === 'Scissors' && randomChoice === 'Paper':
    //                            console.log('You win! Cut that paper right in half!');
      //                          break;
//
  //      default:
    //                playerChoice;
    }
}
