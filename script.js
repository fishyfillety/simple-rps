let playerScore = 0;
let computerScore = 0;  

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const scoreBoard = document.querySelector('#scoreBoard');
const roundAnnouncement = document.querySelector("#roundAnnouncement");



rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));   
  
/*alert("The side with the most rounds won in 5 games is declared the winner.")
game();
finalAnnouncement();*/


function computerPlay() {
  // Assign the three choices to an array
  const computerChoices = ["rock", "paper", "scissors"];
  // Randomly pick one of the choices with equal chances
  return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}
    

function playRound(selection) {
  let playerSelection = selection;
  console.log(playerSelection);
  let computerSelect = computerPlay();
  console.log(computerSelect);
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
  } else {
      let roundResult = `${playerSelect} versus ${computerSelect}! You lost!`;
      console.log(roundResult);
      computerScore ++;
      roundAnnouncement.textContent = roundResult.charAt(0).toUpperCase() + roundResult.slice(1);
  }
}
  
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(`The score is ${playerScore}-${computerScore}`);
  }
}

function finalAnnouncement() {
  if (playerScore === computerScore) {
    alert(`The final score is ${playerScore}-${computerScore}. It's a draw!`);
  } else if (playerScore < computerScore) {
    alert(`The final score is ${playerScore}-${computerScore}. You are a loser!`);
  } else if (playerScore > computerScore) {
    alert(`The final score is ${playerScore}-${computerScore}. Winner winner chicken dinner!`);
  }
}