//Rock Paper Scissors program


//Function that generates a random choice of Rock, Paper, or Scissors
function getComputerChoice() {
    const gameArray = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = gameArray[Math.floor(Math.random()*gameArray.length)];
    return randomChoice;
}
