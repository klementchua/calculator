let num1 = "";
let operator;
let operatorPressed = false;
let num2 = "";
let result;

//Event Listeners
const buttons = document.querySelector(".buttons"); 
buttons.addEventListener("click", (e) => {
    if (!operatorPressed) {
        switch(e.target.className) {
            case "btn btn-num":
                num1 += e.target.id;
                displayResult(num1);
                break;
            case "btn btn-op btn-func":
                operator = e.target.id;
                operatorPressed = true;
        }
    } else {
        switch(e.target.className) {
            case "btn btn-num":
                num2 += e.target.id;
                displayResult(num2);
                break;
            case "btn btn-op btn-equal":
                result = operate(parseInt(num1),parseInt(num2),operator);
                displayResult(result);
        }
    }
})

const btnClear = document.querySelector("#ac")
btnClear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    result = "";
    operator = "";
    operatorPressed = false;
    displayResult("")
})


// Calculator Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return parseFloat((a * b).toPrecision(5));
}

function divide(a, b) {
    return parseFloat((a / b).toPrecision(5));
}

function operate(a, b, operator) {
    switch(operator) {
        case "add": return add(a,b);
        case "subtract": return subtract(a,b);
        case "multiply": return multiply(a,b);
        case "divide": return divide(a,b);
    }
}

// Display functions
function displayResult(text) {
    const resultDisplay = document.querySelector(".result-display");
    resultDisplay.textContent = `${text}`;
}

// Event Listener Support Functions