const buttons = document.querySelectorAll("button");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultDisplay = document.querySelector(".result");
const playAgain = document.querySelector(".play-again");
const playAgainBtn = document.createElement("button");
const playerWeapon = document.querySelector(".player-weapon");
const enemyWeapon = document.querySelector(".enemy-weapon");

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
    return "ROCK";
  } else if (computerChoice === 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    resultDisplay.textContent = `TIE! BOTH CHOSE ${playerChoice}`;
  } else if (beats(playerChoice, computerChoice)) {
    playerScore++;
    playerScoreDisplay.textContent = `Player score: ${playerScore}`;
    resultDisplay.textContent = `YOU WIN! ${playerChoice} BEATS ${computerChoice}`;
  } else {
    computerScore++;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
    resultDisplay.textContent = `YOU LOSE! ${computerChoice} BEATS ${playerChoice}`;
  }

  changeImage(playerChoice, computerChoice);

  winner();

  return;
}

function beats(a, b) {
  return (
    (a === "ROCK" && b === "SCISSORS") ||
    (a === "PAPER" && b === "ROCK") ||
    (a === "SCISSORS" && b === "PAPER")
  );
}

function winner() {
  if (playerScore === 5 || computerScore === 5) {
    playAgainBtn.textContent = "Play again";

    if (playerScore === 5) {
      resultDisplay.textContent = "CONGRATULATIONS! YOU WON.";
      resultDisplay.classList.toggle("win");
    } else {
      resultDisplay.textContent = "GAME OVER!";
      resultDisplay.classList.toggle("lose");
    }

    playAgainBtn.addEventListener("click", () => {
      location.reload();
    });

    playAgain.appendChild(playAgainBtn);
  }

  return;
}

function changeImage(playerChoice, computerChoice) {
  if (playerChoice === "ROCK") {
    playerWeapon.src = "./images/rock.jpg";
    playerWeapon.alt = "A picture of rock.";
  } else if (playerChoice === "PAPER") {
    playerWeapon.src = "./images/paper.jpg";
    playerWeapon.alt = "A picture of paper.";
  } else {
    playerWeapon.src = "./images/scissors.jpg";
    playerWeapon.alt = "A picture of scissors.";
  }

  if (computerChoice === "ROCK") {
    enemyWeapon.src = "./images/rock.jpg";
    enemyWeapon.alt = "A picture of rock.";
  } else if (computerChoice === "PAPER") {
    enemyWeapon.src = "./images/paper.jpg";
    enemyWeapon.alt = "A picture of paper.";
  } else {
    enemyWeapon.src = "./images/scissors.jpg";
    enemyWeapon.alt = "A picture of scissors.";
  }

  return;
}
