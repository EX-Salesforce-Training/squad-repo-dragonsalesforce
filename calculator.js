function addition() {
    let num1 = document.getElementById("#num1").value
    let num2 = document.getElementById("#num2").value
    let answer = num1 + num2;
    document.getElementById("ans").value = answer
}

function subtraction() {
    let num1 = document.getElementById("#num1").value
    let num2 = document.getElementById("#num2").value
    let answer = num1 - num2;
    document.getElementById("ans").value = answer

}

function mult() {
    let num1 = document.getElementById("#num1").value
    let num2 = document.getElementById("#num2").value
    let answer = num1 * num2;
    document.getElementById("ans").value = answer
}

function divide() {
    let num1 = document.getElementById("#num1").value
    let num2 = document.getElementById("#num2").value
    let answer = num1 / num2;
    document.getElementById("ans").value = answer
}

window.onload = function() {
    document.querySelector("addButton").addEventListener("click", addition)
    document.querySelector("subButton").addEventListener("click", subtraction)
    document.querySelector("multButton").addEventListener("click", mult)
    document.querySelector("divButton").addEventListener("click", divide)
}