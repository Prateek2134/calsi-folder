let displayValue = "0";

function updateDisplay() {
  document.getElementById("display").textContent = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}

function handleKeyboardInput(event) {
  const key = event.key;
  if (/[\d\+\-\*\/\.\(\)]/.test(key)) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Escape") {
    clearDisplay();
  }
}

document.addEventListener("keydown", handleKeyboardInput);

updateDisplay();
