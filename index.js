//functions------------------------

function add(a, b) {
  let sum = a + b;

  return sum;
}

function subtraction(a, b) {
  let sub = a - b;

  return sub;
}

function multiplication(a, b) {
  let mult = a * b;

  return mult;
}

function division(a, b) {
  let division = a / b;

  return division;
}

function power(a, n) {
  let pow = 1;

  for (let i = 0; i < n; i++) {
    pow = pow * a;
  }

  return pow;
}

function addInterval(a, b) {
  let sum = 0;
  for (a; a < b; a++) {
    sum = sum + a;
  }
  return sum;
}
function integerDivision(a,b){
  let res = Math.floor(a/b);

  return res;
}
function remainder(a,b){
  let res = a - (integerDivision(a,b)*b);

  return res;
}

/////-------------------------------

let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let output = document.getElementById("output");

let runButton = document.getElementById("runButton");
runButton.addEventListener("click", run);

function run() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let output = document.getElementById("output");

  let functionName = document.querySelector(".selected").innerText;

  if(functionName == "Addition"){
    output.value = add(num1,num2);
  }else if(functionName == "Subtraction"){
    output.value = subtraction(num1,num2);
  }else if(functionName == "Multiplication"){
    output.value = multiplication(num1,num2);
  }else if(functionName == "Division"){
    output.value = division(num1,num2);
  }else if(functionName == "Power"){
    output.value = power(num1,num2);
  }else if(functionName == "Interval sum"){
    output.value = addInterval(num1,num2);
  }else if(functionName == "Integer division"){
    output.value = integerDivision(num1,num2);
  }else if(functionName == "Remainder"){
    output.value = remainder(num1,num2);
  }
}
for (let el of document.getElementsByClassName("function-btn")) {
    el.addEventListener("click", function (e) {
      document.querySelector(".selected").classList.remove("selected")
      e.target.classList.add("selected");
    });
}
