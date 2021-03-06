let playerScore = 0;
let computerScore = 0;  

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const scoreBoard = document.querySelector('#scoreboard');
const roundAnnouncement = document.querySelector("#round-announcement");
const playerPoints = document.querySelector('#player-score');
const computerPoints = document.querySelector('#computer-score');
const gameEndMessage = document.querySelector('#game-end-message');
const playAgainButton = document.querySelector('#play-again-button');

playAgainButton.style.display = 'none'; // hide the play again button
rock.addEventListener('click', () => {
  playRound('rock');
  rock.classList.add('button-on-click');
  setTimeout(() => rock.classList.remove('button-on-click'), 100);
});
paper.addEventListener('click', () => {
  playRound('paper');
  paper.classList.add('button-on-click');
  setTimeout(() => paper.classList.remove('button-on-click'), 100);
});
scissors.addEventListener('click', () => {
  playRound('scissors');
  scissors.classList.add('button-on-click');
  setTimeout(() => scissors.classList.remove('button-on-click'), 100);
});
playAgainButton.addEventListener('click', () => playAgain()); 

function computerPlay() { 
  // Assign the three choices to an array
  const computerChoices = ["rock", "paper", "scissors"];
  // Randomly pick one of the choices with equal chances
  return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}
    

function playRound(selection) {
  let playerSelection = selection; 
  let computerSelect = computerPlay();
  // Convert playerInput to lowercase to make it case insensitive
  let playerSelect = playerSelection.toLowerCase();
  if (playerSelect === computerSelect) {
      let roundResult = `${playerSelect} versus ${computerSelect}! It's a tie!`;
      console.log(roundResult);
      roundAnnouncement.textContent = roundResult.charAt(0).toUpperCase() + roundResult.slice(1); // capitalize the first letter in the string
  } else if ( // If player wins
      (playerSelect === "rock") && (computerSelect === "scissors") ||
      (playerSelect === "paper") && (computerSelect === "rock") ||
      (playerSelect === "scissors") && (computerSelect === "paper")
  ) {
      let roundResult = `${playerSelect} versus ${computerSelect}! You won!`;
      console.log(roundResult);
      playerScore ++;
      roundAnnouncement.textContent = roundResult.charAt(0).toUpperCase() + roundResult.slice(1);
      playerPoints.textContent = `Player: ${playerScore}`;
  } else {
      let roundResult = `${playerSelect} versus ${computerSelect}! You lost!`;
      console.log(roundResult);
      computerScore ++;
      roundAnnouncement.textContent = roundResult.charAt(0).toUpperCase() + roundResult.slice(1);
      computerPoints.textContent = `Computer: ${computerScore}`;
  }
  gameEndCheck();
}
  
function gameEndCheck() {
  if (playerScore === 5) {
    disableButtons();
    gameEndMessage.textContent = 'You came out victorious!';
    playAgainButton.style.display = 'block'; //unhides the playagain button
  } else if (computerScore === 5) {
    disableButtons();
    gameEndMessage.textContent = 'You lost to a computer.';
    playAgainButton.style.display = 'block'; 
  }

}

function disableButtons() {
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;
}

function enableButtons() {
  document.getElementById('rock').disabled = false;
  document.getElementById('paper').disabled = false;
  document.getElementById('scissors').disabled = false;
}

function playAgain() { //reset everything
  playerScore = 0;
  computerScore = 0;
  playerPoints.textContent = 'Player: 0';
  computerPoints.textContent = 'Computer: 0';
  roundAnnouncement.textContent = 'First to 5 points wins';
  playAgainButton.style.display = 'none';
  enableButtons();
  gameEndMessage.textContent = '';
}