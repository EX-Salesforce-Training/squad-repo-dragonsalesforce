var answer;
document.addEventListener('submit',function(e){
    e.preventDefault()
    var numOne=document.getElementById('numOne').value
    var numTwo=document.getElementById('numTwo').value
    var operation=document.getElementById('operation').value
    if(operation=="+"){
        answer= parseInt(numOne) + parseInt(numTwo);
    }
    if(operation=="-"){
        answer= parseInt(numOne) - parseInt(numTwo);
    }
    if(operation=="/"){
        answer= parseInt(numOne) / parseInt(numTwo);
    }
    if(operation=="*"){
        answer= parseInt(numOne) * parseInt(numTwo);
    }
    console.log(numOne);
    console.log(numTwo);
    console.log(answer);
}
)