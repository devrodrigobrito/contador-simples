// Elementos do DOM
const display = document.getElementById("counterDisplay");
const decreaseButton = document.getElementById("decrementBtn");
const increaseButton = document.getElementById("incrementBtn");
const resetButton = document.getElementById("resetBtn");
const currentValue = document.getElementById("currentValue");

// Variáveis de controle
let counter = 0;
const minLimit = -10;
const maxLimit = 10;

// Função para atualizar todos os displays
function updateDisplay() {
  display.textContent = counter;
  currentValue.textContent = counter;
}

// Função para decrementar o contador
function decreaseCounter() {
  if (counter > minLimit) {
    counter--;
    updateDisplay();
  }
}

// Função para incrementar o contador
function increaseCounter() {
  if (counter < maxLimit) {
    counter++;
    updateDisplay();
  }
}

// Função para resetar o contador
function resetCounter() {
  counter = 0;
  updateDisplay();
}

// Event Listeners
decreaseButton.addEventListener("click", decreaseCounter);
increaseButton.addEventListener("click", increaseCounter);
resetButton.addEventListener("click", resetCounter);


// Suporte a teclado 
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp" || event.key === "+") {
    increaseCounter();
  } else if (event.key === "ArrowDown" || event.key === "-") {
    decreaseCounter();
  } else if (["r", "R", "Escape"].includes(event.key)) {
    resetCounter();
  }
});
