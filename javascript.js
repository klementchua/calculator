let num1;
let operator;
let num2;


// Calculator Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return parseFloat((a * b).toPrecision(10));
}

function divide(a, b) {
    return parseFloat((a / b).toPrecision(10));
}

function operate(a, b, operator) {
    switch(operator) {
        case "add": return add(a,b);
        case "subtract": return subtract(a,b);
        case "multiply": return multiply(a,b);
        case "divide": return divide(a,b);
    }
}