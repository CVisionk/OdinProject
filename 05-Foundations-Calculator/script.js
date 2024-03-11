const buttonArr = document.querySelectorAll(".num");
const dotInput = document.querySelector(".dot")
const operator = document.querySelectorAll(".operator-btn");
const clearInput = document.querySelector(".all-clear");
const deleteBtn = document.querySelector(".delete");
const calculatorScreen = document.querySelector(".calculator-screen");

//calculatorScreen.value = "999×88÷99+09-03";

operatorRegex = /[+\-×÷%]/;

dotInput.addEventListener("click", () => {
 const splitInput = calculatorScreen.value.split(operatorRegex);

 if(!isNaN(splitInput[splitInput.length - 1] + '.')) calculatorScreen.value+= dotInput.innerText;
});

clearInput.addEventListener("click", () =>{
 calculatorScreen.value = "";
});

deleteBtn.addEventListener("click", () => {
 if(calculatorScreen.value.length > 0 ) calculatorScreen.value = calculatorScreen.value.slice(0, -1);
});

buttonArr.forEach(button => {
 button.addEventListener("click", () => {
  calculatorScreen.value += button.innerText;
 });
});

buttonArr.forEach(button => {
 button.addEventListener("click", () => {
  calculatorScreen.value += button.innerText;
 });
});




console.log(buttonArr);
console.log(operator);
console.log(clearInput);
console.log(calculatorScreen.value.length);
console.log(isNaN("1.3.4"));

