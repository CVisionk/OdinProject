const buttonArr = document.querySelectorAll(".num");
const dotInput = document.querySelector(".dot")
const operator = document.querySelectorAll(".operator-btn");
const clearInput = document.querySelector(".all-clear");
const deleteBtn = document.querySelector(".delete");
const calculatorScreen = document.querySelector(".calculator-screen");
const getPercent = document.querySelector(".percent");

operatorCount = 0;

//calculatorScreen.value = "999×88÷99+09-03";

operatorRegex = /[+\-×÷]/;


const calculateInput = (input) =>{
 
 const splitInput = calculatorScreen.value.split(operatorRegex);
 if(splitInput.length == 3){
 const operator = input.match(operatorRegex);
 switch (operator[1]) {
  case "+":
      return splitInput[0] + splitInput[2];
  case "-":
      return splitInput[0] + splitInput[2];
  case "*":
      return splitInput[0] + splitInput[2];
  case "/":
      return splitInput[0] + splitInput[2];
  default:
      return "Invalid operator";
}}else{
 calculatorScreen.value = "I don't know man";
}
}

getPercent.addEventListener("click", () => {
 const splitInput = calculatorScreen.value.split(operatorRegex);
 if(calculatorScreen.value && !calculatorScreen.value[calculatorScreen.value.length-1].match(operatorRegex)){
  const splitInput = calculatorScreen.value.split(operatorRegex);
  if (splitInput.length === 0) {
   return;
}
  calculatorScreen.value = calculatorScreen.value.split(splitInput[splitInput.length-1]);
  return splitInput[splitInput.length -1]
 }

});

dotInput.addEventListener("click", () => {
 const splitInput = calculatorScreen.value.split(operatorRegex);

 if(!isNaN(splitInput[splitInput.length - 1] + '.')) calculatorScreen.value+= dotInput.innerText;
});

clearInput.addEventListener("click", () =>{
 calculatorScreen.value = "";
 operatorCount = 0;

 console.log(operatorCount);
});

deleteBtn.addEventListener("click", () => {
 if (calculatorScreen.value[calculatorScreen.value.length-1].match(operatorRegex)) operatorCount  = 0;

 if(calculatorScreen.value.length > 0 ) calculatorScreen.value = calculatorScreen.value.slice(0, -1);
});

buttonArr.forEach(button => {
 button.addEventListener("click", () => {
  calculatorScreen.value += button.innerText;
 });
});

operator.forEach(operator => {
 operator.addEventListener("click", () => {
  if(calculatorScreen.value[calculatorScreen.value.length-1].match(operatorRegex)){
   calculatorScreen.value = calculatorScreen.value.slice(0, -1);
   calculatorScreen.value += operator.innerText;
  }else if(operatorCount == 0){
  calculatorScreen.value += operator.innerText
  operatorCount += 1;
 }else{
  calculatorScreen.value = "Calc";
  operatorCount -= 1;
 }

 });
});




console.log(buttonArr);
console.log(operator);
console.log(clearInput);
console.log(calculatorScreen.value.length);
console.log(isNaN("1.3.4"));

