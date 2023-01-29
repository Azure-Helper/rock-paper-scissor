const availChoices = ["Rock", "Paper", "Scissors"];
let playerChoice = "";
let computerChoice = "";
const playerEl = document.getElementById("player");
const computerEl = document.getElementById("computer");
const popupEl = document.getElementById("popup-el");
let statusEl = document.getElementById("status-el");

function generateRandom() {
  computerChoice =
    availChoices[Math.floor(Math.random() * availChoices.length)];
  return computerChoice;
}

function rock() {
  generateRandom();
  playerChoice = "Rock";
  playerEl.textContent = "Player: " + playerChoice;
  computerEl.textContent = "Computer: " + computerChoice;
  if (playerChoice === computerChoice) {
    statusEl.textContent = "It's a draw!";
  } else if (playerChoice === "Rock") {
    if (computerChoice === "Paper") {
      statusEl.textContent = "Paper covers rock! Computer Win!";
    } else {
      statusEl.textContent = "Rock smashes scissors! You Win!";
    }
  }
}

function paper() {
  generateRandom();
  playerChoice = "Paper";
  playerEl.textContent = "Player: " + playerChoice;
  computerEl.textContent = "Computer: " + computerChoice;
  if (playerChoice === computerChoice) {
    statusEl.textContent = "It's a draw!";
  } else if (playerChoice === "Paper") {
    if (computerChoice === "Scissors") {
      statusEl.textContent = "Scissors cuts paper! Computer Win!";
    } else {
      statusEl.textContent = "Paper covers rock! You Win!";
    }
  }
}

function scissors() {
  generateRandom();
  playerChoice = "Scissors";
  playerEl.textContent = "Player: " + playerChoice;
  computerEl.textContent = "Computer: " + computerChoice;
  if (playerChoice === computerChoice) {
    statusEl.textContent = "It's a draw!";
  } else if (playerChoice === "Scissors") {
    if (computerChoice === "Rock") {
      statusEl.textContent = "Rock smashes scissors! Computer Win!";
    } else {
      statusEl.textContent = "Scissors cuts paper! You Win!";
    }
  }
}
