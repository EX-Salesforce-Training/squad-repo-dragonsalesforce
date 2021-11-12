
window.onload = function(){
    document.querySelector("#multiplyButton").addEventListener("click", updateResultMultiply);
    document.querySelector("#divideButton").addEventListener("click", updateResultDivide);
    document.querySelector("#subtractButton").addEventListener("click", updateResultSubtract);
    document.querySelector("#addButton").addEventListener("click", updateResultAdd);
}

function MultiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
}

function DivideBy(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
}

function SubtractBy(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
}

function AddWith(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
}

function updateResultMultiply() {
    var numberResult = MultiplyBy(document.querySelector("#NumberResult").value);
    numberResult = num1 * num2;
    document.querySelector("#NumberResult").value = numberResult;
}
function updateResultDivide() {
    var numberResult = DivideBy(document.querySelector("#NumberResult").value);
    numberResult = num1 / num2;
    document.querySelector("#NumberResult").value = numberResult;
}
function updateResultSubtract() {
    var numberResult = SubtractBy(document.querySelector("#NumberResult").value);
    numberResult = num1 - num2;
    document.querySelector("#NumberResult").value = numberResult;
}
function updateResultAdd() {
    var numberResult = AddWith(document.querySelector("#NumberResult").value);
    numberResult = num1 + num2;
    document.querySelector("#NumberResult").value = numberResult;
}