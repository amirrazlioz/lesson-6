let currentNumber = "";
let previousNumber = "";
let operation = null;

function appendNumber(number) {
    currentNumber += number;
    updateDisplay(currentNumber);
}

function setOperation(op) {
    if (currentNumber === "") return;
    if (previousNumber !== "") {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = "";
}

function calculate() {
    if (operation === null || currentNumber === "" || previousNumber === "") return;
    const x = parseFloat(previousNumber);
    const y = parseFloat(currentNumber);
    let result;

    switch (operation) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            if (y === 0) {
                result = "Error";
            } else {
                result = x / y;
            }
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operation = null;
    previousNumber = "";
    updateDisplay(currentNumber);
}

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operation = null;
    updateDisplay("");
}

function updateDisplay(value) {
    const display = document.getElementById("display");
    display.value = value;
}