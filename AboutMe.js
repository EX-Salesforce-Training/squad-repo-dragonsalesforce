function calculate(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var calculation;
    function add(x, y){
      return x + y;
    }
    function subtract(x, y){
      return x + y;
    }
    function multiply(x, y){
      return x * y;
    }
    function divide(x, y){
      if(y == 0){
        console.log("Err. Divide by zero.");
      }
      else{
        return x / y;
      }
    }
    function exponential(x, y){
        console.log("This feature is experiencing technical issues");
        if(y == 0){
            return 1;
        }
        else if(y < 0){
            var valueHolder = x;
            for(i = -1; i > y; i--){
                valueHolder = valueHolder * x;
            }
            return (1/valueHolder);
        }
        else{
            var valueHolder = x;
            for(i = 1; i < y; i++){
                valueHolder = valueHolder * x;
            }
            return valueHolder;
        }
    }
    switch(document.getElementById("operationSelection").value){
        case "+":
            calculation = add(num1, num2);
        break;
        case "-":
            calculation = subtract(num1, num2);
        break;
        case "*":
            calculation = multiply(num1, num2);
        break;
        case "/":
            calculation = divide(num1, num2);
        break;
        case "^":
            calculation = exponential(num1, num2);
        break;
    }
    document.getElementById("Result").value = calculation;
  }
window.onload = function(){
  document.getElementById("Calculate").addEventListener("click", calculate);
}
