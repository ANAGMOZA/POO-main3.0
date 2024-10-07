let currentInput = '';
let previousInput = '';
let operation = '';

function press(num) {
    if (currentInput.length < 10) { // Limitar a 10 dígitos
        currentInput += num.toString();
        updateDisplay();
    }
}

function setOP(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = '';
    previousInput = '';
    updateDisplay();
}

function clr() {
    currentInput = '';
    previousInput = '';
    operation = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput || '0';
}