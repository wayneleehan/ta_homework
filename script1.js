document.getElementById("calculatorForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Fetch inputs
  const number1 = parseFloat(document.getElementById("number1").value);
  const operator = document.getElementById("operator").value;
  const number2 = parseFloat(document.getElementById("number2").value);

  // Calculate result
  let result;
  switch (operator) {
    case "+":
      result = add(number1, number2);
      break;
    case "-":
      result = subtract(number1, number2);
      break;
    case "*":
      result = multiply(number1, number2);
      break;
    case "/":
      result = divide(number1, number2);
      break;
    default:
      result = "Invalid operation";
  }

  // Display result
  document.getElementById("result").textContent = `Result = ${result}`;
});

// Functions for operations
function add(a, b) {
  return (a + b).toFixed(2);
}

function subtract(a, b) {
  return (a - b).toFixed(2);
}

function multiply(a, b) {
  return (a * b).toFixed(2);
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return (a / b).toFixed(2);
}
