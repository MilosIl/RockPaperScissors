const buttons = document.querySelectorAll(".pick");
const scoreEl = document.getElementById("score");
const main = document.getElementById("main");
const selection = document.getElementById("selection");
const reset = document.getElementById("reset");
const user_select = document.getElementById("user_select");
const computer_select = document.getElementById("computer_select");
const winner = document.getElementById("winner");

//model buttons
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const model = document.getElementById("model");
const choices = ["paper", "rock", "scissors"];

let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");

    checkWinner();
  });
});

reset.addEventListener("click", () => {
  main.style.display = "flex";
  selection.style.display = "none";
});

openBtn.addEventListener("click", () => {
  model.style.display = "flex";
});
openBtn.addEventListener("dblclick", () => {
  model.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  model.style.display = "none";
});
function checkWinner() {
  const computerChoice = pickRandomChoice();

  //update the view
  updateSelection(user_select, userChoice);
  updateSelection(computer_select, computerChoice);
  if (userChoice === computerChoice) {
    //draw
    winner.innerHTML = "draw";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    //user won
    winner.innerHTML = "win";
    updateScore(1);
  } else {
    //user lost
    winner.innerHTML = "lost";
  }
  //show the selection|hide the main
  main.style.display = "none";
  selection.style.display = "flex";
}
function updateScore() {
  score += 1;
  scoreEl.innerHTML = score;
}

function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
console.log(pickRandomChoice());

function updateSelection(selectionEl, choice) {
  //class reset
  selectionEl.classList.remove("btn-paper");
  selectionEl.classList.remove("btn-rock");
  selectionEl.classList.remove("btn-scissors");

  //update the img
  const img = selectionEl.querySelector("img");
  selectionEl.classList.add(`btn-circle-${choice}`);
  img.src = `./images/icon-${choice}.svg`;
  img.alt = choice;
}
