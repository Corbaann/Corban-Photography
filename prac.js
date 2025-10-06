let resultEl = document.getElementById("Result");

function getNumbers() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    return { num1, num2 };
}

function add() {
    const { num1, num2 } = getNumbers();
    resultEl.textContent = num1 + num2;
}
function subtract() {
    const { num1, num2 } = getNumbers();
    resultEl.textContent = num1 - num2;
}
function multiply() {
    const { num1, num2 } = getNumbers();
    resultEl.textContent = num1 * num2;
}
function divide() {
    const { num1, num2 } = getNumbers();
    resultEl.textContent = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
}