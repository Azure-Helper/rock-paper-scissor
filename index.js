const availChoices = ["Rock", "Paper", "Scissor"];
let playerChoice = "";
let computerChoice = "";
const playerEl = document.getElementById("player")
const computerEl = document.getElementById("computer")
const popupEl = document.getElementById("popup-el")
let statusEl = document.getElementById("status-el")

function generateRandom() {
  computerChoice =
    availChoices[Math.floor(Math.random() * availChoices.length)];
  return computerChoice;
}

function rock() {
  playerChoice = "Rock";
  generateRandom()
  playerEl.textContent = "Player: " + playerChoice
  computerEl.textContent = "Computer: " + computerChoice
  if (playerChoice === computerChoice) {
    statusEl.textContent = "Draw"
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    statusEl.textContent = "Computer Win"
  } else if (playerChoice === "Rock" && computerChoice === "Scissor") {
    statusEl.textContent = "Player Win"
  }
}

function paper() {
  playerChoice = "Paper";
  generateRandom()
  playerEl.textContent = "Player: " + playerChoice
  computerEl.textContent = "Computer: " + computerChoice
  if (playerChoice === computerChoice) {
    statusEl.textContent = "Draw"
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    statusEl.textContent = "Player Win"
  } else if (playerChoice === "Paper" && computerChoice === "Scissor") {
    statusEl.textContent = "Computer Win"
  }
}

function scissor() {
  generateRandom()
  playerChoice = "Scissor";
  playerEl.textContent = "Player: " + playerChoice
  computerEl.textContent = "Computer: " + computerChoice
  if (playerChoice === computerChoice) {
    statusEl.textContent = "Draw"
  } else if (playerChoice === "Scissor" && computerChoice === "Rock") {
    statusEl.textContent = "Computer Win"
  } else if (playerChoice === "Scissor" && computerChoice === "Paper") {
    statusEl.textContent = "Player Win"
  }
}
