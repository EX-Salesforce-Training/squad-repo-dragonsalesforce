//alert("Feel free to use the calculator at the bottom of the page to add, subtract, multiply, or divide any 2 numbers.")

function math(){
    event.preventDefault();
    let result=3
    let num1= document.getElementById("first").value
    let num2= document.getElementById("second").value
    let mathType= document.getElementById("math").value
    if(mathType=="Addition"){
        num1=parseInt(num1);
        num2=parseInt(num2);
        result= num1+num2
    }
    if(mathType=="Subtraction"){
        result= num1-num2
    }
    if(mathType=="Multiplication"){
        result= num1*num2
    }
    if(mathType=="Division"){
        result= num1/num2
    }
    let display= document.createElement("ul");
    const getOuttaHere=document.querySelector("div#mathresults>ul")
    display.innerHTML=result
    mathresults.appendChild(display);
    if(getOuttaHere!==null){
        mathresults.replaceChild(display,getOuttaHere)
    }
}
document.getElementById("numbers").addEventListener("submit",math);