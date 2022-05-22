import { FunList } from "./function-objects.js";

let description = document.getElementById("description");
let body = document.getElementsByTagName("body")[0];
let buttonContainer = document.getElementById("btn-cont");

let runButton = document.getElementById("runButton");
runButton.addEventListener("click", run);

body.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    run();
  }
});

function run() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let output = document.getElementById("output");

  let functionName = document.querySelector(".selected").innerText;

  for (let funObj of FunList) {
    if (functionName == funObj.name) {
      output.value = funObj.fun(num1, num2);
    }
  }
}

function toggleSelection(e) {
  document.querySelector(".selected").classList.remove("selected");
  e.target.classList.add("selected");
  let functionName = document.querySelector(".selected").innerText;

  for (let funObj of FunList) {
    if (functionName == funObj.name) {
      description.innerText = funObj.desc;
    }
  }
}

let button = document.createElement("button");

button.classList.add("function-btn", "btn", "selected");
button.innerHTML = FunList[0].name;
button.addEventListener("click", toggleSelection)
description.innerText = FunList[0].desc;
buttonContainer.append(button);

for (let funObj of FunList.slice(1)) {
  let button = document.createElement("button");

  button.classList.add("function-btn", "btn");
  button.addEventListener("click", toggleSelection)
  button.innerHTML = funObj.name;
  buttonContainer.append(button);
}
