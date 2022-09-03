//Rock Paper Scissors with UI (Revisited)
alert('Welcome to Rock, Paper, Scissors!');
alert('Enough of this simple talk, lets do this! First one to 5 points wins!');

//Function that generates a random choice of Rock, Paper, or Scissors
function getComputerChoice() {
    const gameArray = ['Rock', 'Paper', 'Scissors'];
    return randomChoice = gameArray[Math.floor(Math.random()*gameArray.length)];
}


function domGame() {
    let playerScore = 0;
    let compScore = 0;
    let gameWinner = "";

//Create even listener for button selections of the player
    const buttons = document.querySelectorAll('button');
    //.forEach to iterate through each button
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            playerSelection = button.className;
            battle.textContent = playRound(playerSelection, computerSelection);
            player.textContent = 'Player Win Total: ' + playerScore;
            comp.textContent = 'Computer Win total: ' + compScore;
            endGame();
        })
    })


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


        //Create div DOM for scores/results
        const container = document.querySelector('#container');
        const resultsDiv = document.createElement('div');
        resultsDiv.style.marginTop = '20px';
        container.appendChild(resultsDiv);

        //Create player win tracking DOM
        const player = document.createElement('p');
        player.style.color = 'blue';
        player.textContent = 'Player Win totals: ' + playerScore;
        resultsDiv.appendChild(player);

        //Create computer win tracking DOM
        const comp = document.createElement('p');
        comp.style.color = 'blue';
        comp.textContent = 'Computer Win totals: ' + compScore;
        resultsDiv.appendChild(comp);

        //Create battle text in DOM
        const battle = document.createElement('p');
        battle.style.color = 'green';
        resultsDiv.appendChild(battle);

        //Create game win text DOM
        const gameWin = document.createElement('p');
        gameWin.style.color = 'red';
        gameWin.textContent = gameWinner;
        resultsDiv.appendChild(gameWin);



        //Determine who won the game
        function endGame() {
            if (playerScore == 5) {
                gameWinner = 'You Win!';
                gameWin.textContent = gameWinner;

                //disable game buttons
                document.getElementById("1").disabled = true;
                document.getElementById("2").disabled = true;
                document.getElementById("3").disabled = true;

                //create new DOM button to replay
                const playAgainButton = document.createElement('button');
                playAgainButton.textContent = 'Play Again!';
                resultsDiv.appendChild(playAgainButton);

                //if clicked, reload page
                playAgainButton.addEventListener('click', () => {
                    location.reload();
                })
            } else if (compScore == 5) {
                gameWinner = 'Computer Wins!';
                gameWin.textContent = gameWinner;

                //disabled game buttons
                document.getElementById("1").disabled = true;
                document.getElementById("2").disabled = true;
                document.getElementById("3").disabled = true;

                 //create new DOM button to replay
                const playAgainButton = document.createElement('button');
                playAgainButton.textContent = 'Play Again!';
                resultsDiv.appendChild(playAgainButton);

                //if clicked, reload page
                playAgainButton.addEventListener('click', () => {
                    location.reload();
                })
            }
        }
    }

    //function called to start the game
    domGame();






//Function that makes the players choice case-insensitive
//function caseInsensitive(choice) {
//  return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
//}

//For loop that plays 5 rounds of Rock Paper Scissors and keeps score
//function game() {
 //   for (let i = 0; i < 5; i++) {
     //   const computerSelection = getComputerChoice();
       // let playerSelection = caseInsensitive(prompt("Whats your choice?"));
   //     console.log('Your choice: ', playerSelection);
     //   console.log('Computer Choice: ', computerSelection);
       // console.log(playRound(playerSelection, computerSelection));
       // console.log('Your Score: ', playerScore);
       // console.log('Computer Score:', compScore);
        //   }
   // }

//game();

//If condition that will do a comparison of the scores to notify the player if they won/lost/tied
//if (playerScore === compScore) {
  //  console.log("This match ends in a tie!");
 //} else if(playerScore > compScore) {
   // console.log("You are victorious!");
 //} else {
   // console.log("You lost the match!");
// }


