const fiveRoundsGame = () => {
  for (let i = 0; i < 5; i++) {
    alert(playRound(getPlayerChoice(), getComputerChoice()));
  }
};

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

  while (!(input === "rock" || input === "paper" || input === "scissors")) {
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
    case "Scissor":
      playerWins = computerChoice === "Scissors";
      break;
    default:
      return "Invalid choice";
  }

  return playerWins
    ? `You Win! ${playerChoice} beats ${computerChoice}!`
    : `You Lose! ${computerChoice} beats ${playerChoice}!`;
}
