// Variables
const display = document.querySelector(".calculator_display_input");
const clearButton = document.querySelector("#clear");
const percentButton = document.querySelector("#percent");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const subtractButton = document.querySelector("#subtract");
const addButton = document.querySelector("#add");
const equalsButton = document.querySelector("#equal");
const decimalButton = document.querySelector("#period");
const zeroButton = document.querySelector("#zero");
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");

let num1 = "";
let num2 = "";
let operator = "";
let result = "";

function clear() {
  display.value = "";
  num1 = "";
  num2 = "";
  operator = "";
  result = "";
}

function addNumber(number) {
  if (operator === "") {
    num1 += number;
  } else {
    num2 += number;
  }
  display.value += number;
}

function addOperator(op) {
  if (num1 !== "") {
    operator = op;
    display.value += op;
  }
}

function addDecimal() {
  if (operator === "") {
    if (!num1.includes(".")) {
      num1 += ".";
      display.value += ".";
    }
  } else {
    if (!num2.includes(".")) {
      num2 += ".";
      display.value += ".";
    }
  }
}

function calculate() {
  if (num1 !== "" && num2 !== "") {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }
    display.value = result;
    num1 = result;
    num2 = "";
    operator = "";
  }
}

// Event Listeners
clearButton.addEventListener("click", clear);
percentButton.addEventListener("click", () => addOperator("%"));
divideButton.addEventListener("click", () => addOperator("/"));
multiplyButton.addEventListener("click", () => addOperator("*"));
subtractButton.addEventListener("click", () => addOperator("-"));

addButton.addEventListener("click", () => addOperator("+"));
equalsButton.addEventListener("click", calculate);
decimalButton.addEventListener("click", addDecimal);
zeroButton.addEventListener("click", () => addNumber("0"));
oneButton.addEventListener("click", () => addNumber("1"));
twoButton.addEventListener("click", () => addNumber("2"));
threeButton.addEventListener("click", () => addNumber("3"));
fourButton.addEventListener("click", () => addNumber("4"));
fiveButton.addEventListener("click", () => addNumber("5"));
sixButton.addEventListener("click", () => addNumber("6"));
sevenButton.addEventListener("click", () => addNumber("7"));
eightButton.addEventListener("click", () => addNumber("8"));
nineButton.addEventListener("click", () => addNumber("9"));
