const buttons = document.querySelectorAll("button");
const resultsDiv = document.querySelector("#results");
let playerScore = 0;
let computerScore = 0;
const scores = document.querySelector("#scores");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let result = playRound(
      capitalizeLowerCase(e.target.className),
      getComputerChoice()
    );
    scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  });
});

function getComputerChoice() {
  let numberChoice = Math.floor(Math.random() * 3);

  switch (numberChoice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function getPlayerChoice() {
  let input;
  let isValidInput =
    input === "rock" || input === "paper" || input === "scissors";

  while (!isValidInput) {
    input = prompt("Choose Rock, Paper or Scissors").toLowerCase();
  }

  return capitalizeLowerCase(input);
}

function capitalizeLowerCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return `It's a tie! Both chose ${playerChoice}!`;
  }

  let playerWins;

  switch (playerChoice) {
    case "Rock":
      playerWins = computerChoice === "Scissors";
      break;
    case "Paper":
      playerWins = computerChoice === "Rock";
      break;
    case "Scissors":
      playerWins = computerChoice === "Scissors";
      break;
    default:
      return "Invalid choice";
  }

  if (playerWins) {
    playerScore++;
    return `You Win! ${playerChoice} beats ${computerChoice}!`;
  } else {
    computerScore++;
    return `You Lose! ${computerChoice} beats ${playerChoice}!`;
  }
}
