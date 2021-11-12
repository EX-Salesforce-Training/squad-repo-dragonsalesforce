window.onload = function() {
    document.querySelector("addButton").addEventListener("click", doAdd)
    document.querySelector("subButton").addEventListener("click", doSubtract)
    document.querySelector("multButton").addEventListener("click", doMultiply)
    document.querySelector("divButton").addEventListener("click", doDivide)
}

function doAdd() {
    let num1 = parseInt(document.getElementById("#num1").value)
    let num2 = parseInt(document.getElementById("#num2").value)
    let answer = num1 + num2;
    document.getElementById("ans").value = answer
}

function doSubtract() {
    let num1 = parseInt(document.getElementById("#num1").value)
    let num2 = parseInt(document.getElementById("#num2").value)
    let answer = num1 - num2;
    document.getElementById("ans").value = answer

}

function doMultiply() {
    let num1 = parseInt(document.getElementById("#num1").value)
    let num2 = parseInt(document.getElementById("#num2").value)
    let answer = num1 * num2;
    document.getElementById("ans").value = answer
}

function doDivide() {
    let num1 = parseInt(document.getElementById("#num1").value)
    let num2 = parseInt(document.getElementById("#num2").value)
    let answer = num1 / num2;
    document.getElementById("ans").value = answer
}

