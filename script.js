const buttons = document.querySelectorAll("button");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultDisplay = document.querySelector("#result");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5) {
      playRound(button.id, getComputerChoice());
    }
  });
});

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    resultDisplay.textContent = `Result: Tie! Both chose ${playerChoice}`;
    return;
  } else if (beats(playerChoice, computerChoice)) {
    playerScore++;
    playerScoreDisplay.textContent = `Player score: ${playerScore}`;
    resultDisplay.textContent = `Result: You win! ${playerChoice} beats ${computerChoice}`;
    return;
  } else {
    computerScore++;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
    resultDisplay.textContent = `Result: You lose! ${computerChoice} beats ${playerChoice}`;
    return;
  }
}

function beats(a, b) {
  return (
    (a === "rock" && b === "scissors") ||
    (a === "paper" && b === "rock") ||
    (a === "scissors" && b === "paper")
  );
}
