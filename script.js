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

function getHumanChoice() {
  return prompt("Choose your weapon: rock, paper or scissors ?");
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    const humanChoiceCaseInsensitive = humanChoice.toLowerCase();

    // Tie!
    if (humanChoiceCaseInsensitive === computerChoice) {
      return "Tie!";
    }

    // Who won
    if (
      computerChoice === "rock" &&
      humanChoiceCaseInsensitive === "scissors"
    ) {
      ++computerScore;
      return "You lose! Rock beats scissors";
    } else if (
      computerChoice === "paper" &&
      humanChoiceCaseInsensitive === "rock"
    ) {
      ++computerScore;
      return "You lose! Paper beats rock";
    } else if (
      computerChoice === "scissors" &&
      humanChoiceCaseInsensitive === "paper"
    ) {
      ++computerScore;
      return "You lose! Scissors beats paper";
    } else {
      ++humanScore;
      return "You win!";
    }
  }

  let humanScore = 0;
  let computerScore = 0;
  let round = 1;

  console.log("=== Rock Paper Scissors ===");
  console.log("First to score 5 points wins the game");

  while (humanScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`=== Round ${round} ===`);
    console.log("--- Weapon ---");
    console.log(`Your weapon: ${humanSelection}`);
    console.log(`Computer weapon: ${computerSelection}`);

    // call the playRound function
    console.log("--- Result ---");
    console.log(playRound(humanSelection, computerSelection));

    console.log("--- Score ---");
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

    ++round;
  }

  if (humanScore === 5) {
    console.log("=== You are the winner! ===");
  } else {
    console.log("=== You lost! ===");
  }
}

playGame();
