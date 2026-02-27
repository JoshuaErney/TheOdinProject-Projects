const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  return choices[num].toLowerCase();
}

let playerWinCount = 0;
let computerWinCount = 0;

function playRound(userChoice, computerSelection) {
  if (typeof computerSelection === "undefined") {
    computerSelection = getComputerChoice();
  }

  switch (userChoice) {
    case "rock":
      if (computerSelection === "rock") {
        console.log("It's a tie, play again!");
        playRound(userChoice); // Re-play the round with the same user choice
      } else if (computerSelection === "paper") {
        console.log("The player lost! Paper beats Rock, try again.");
        ++computerWinCount;
      } else if (computerSelection === "scissors") {
        console.log("The player wins! Rock beats Scissors.");
        ++playerWinCount;
      }
      break;
    case "paper":
      if (computerSelection === "paper") {
        console.log("It's a tie, play again!");
        playRound(userChoice); // Re-play the round with the same user choice
      } else if (computerSelection === "scissors") {
        console.log("The player lost! Scissors beat Paper, try again.");
        ++computerWinCount;
      } else if (computerSelection === "rock") {
        console.log("The player wins! Paper beats Rock.");
        ++playerWinCount;
      }
      break;
    case "scissors":
      if (computerSelection === "scissors") {
        console.log("It's a tie, play again!");
        playRound(userChoice); // Re-play the round with the same user choice
      } else if (computerSelection === "paper") {
        console.log("The player wins! Scissors beats Paper.");
        ++playerWinCount;
      } else if (computerSelection === "rock") {
        console.log("The player lost! Rock beats Scissors.");
        ++computerWinCount;
      }
      break;
  }

  console.log(`Player: ${playerWinCount}, Computer: ${computerWinCount}`);
  return [playerWinCount, computerWinCount];
}

const body = document.querySelector("body");

// Creating Elements
const resultContainer = document.createElement("div");
const btnGroup = document.createElement("div");

// Adding identifiers to elements
btnGroup.classList.add("btnGroup");
resultContainer.classList.add("results");

function createButtons() {
  document.body.appendChild(btnGroup);
  for (let i = 0; i < choices.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = `Select ${choices[i]}`;
    btn.setAttribute("id", `${choices[i].toLowerCase()}`);
    btnGroup.appendChild(btn);
  }
}
createButtons();

function userChoice(choice) {
  const result = playRound(choice);
  resultContainer.textContent = `Player: ${result[0]} - Computer: ${result[1]}`;
}

// Add event listeners to buttons
document
  .querySelector("#rock")
  .addEventListener("click", () => userChoice("rock"));
document
  .querySelector("#paper")
  .addEventListener("click", () => userChoice("paper"));
document
  .querySelector("#scissors")
  .addEventListener("click", () => userChoice("scissors"));

// Appends Elements to document
body.appendChild(resultContainer);
