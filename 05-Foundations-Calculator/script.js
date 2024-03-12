const buttonArr = document.querySelectorAll(".num");
const dotInput = document.querySelector(".dot")
const operator = document.querySelectorAll(".operator-btn");
const clearInput = document.querySelector(".all-clear");
const deleteBtn = document.querySelector(".delete");
const calculatorScreen = document.querySelector(".calculator-screen");
const getPercent = document.querySelector(".percent");

operatorCount = 0;
operatorRegex = /[+\-×÷]/;

formatAnswer = (answer) =>{
	if(answer > 9999999999){
		return "ginormous number";
	}else return parseFloat(answer).toFixed(8).replace(/\.?0+$/, '').replace(/\.$/, '');
}

const calculateInput = (input) =>{
 
 const splitInput = input.split(operatorRegex);
	const operatorIndex = input.split(/[0-9]/);
	console.log(operatorIndex);
	console.log(splitInput);
	console.log(input);

 if(operatorIndex.length > 2 ){
 const tempIndex = input.search(operatorRegex);
	const operator = input.charAt(tempIndex);
	console.log("operator", operator);
 switch (operator[0]) {
  case "+":
   return formatAnswer(parseFloat(splitInput[0]) + parseFloat(splitInput[1]));
  case "-":
			return formatAnswer(parseFloat(splitInput[0]) + parseFloat(splitInput[1]));
  case "×":
			return formatAnswer(parseFloat(splitInput[0]) + parseFloat(splitInput[1]));
  case "÷":
			if (parseFloat(splitInput[1]==0)) return;
			 return formatAnswer(parseFloat(splitInput[0]) + parseFloat(splitInput[1]));
		default:
      return "Invalid operator";
}}else{
 calculatorScreen.value = "I don't know man";
}
}

getPercent.addEventListener("click", () => {
 const splitInput = calculatorScreen.value.split(operatorRegex);
 if(calculatorScreen.value && !calculatorScreen.value[calculatorScreen.value.length-1].match(operatorRegex))
	{
  const splitInput = calculatorScreen.value.split(operatorRegex);
  if (splitInput.length === 0) return;
		let temp = calculatorScreen.value;
		const index = temp.lastIndexOf(splitInput[splitInput.length -1]);
		console.log(temp);
		calculatorScreen.value = temp.substring(0, index) + temp.substring(index + splitInput[splitInput.length -1].length);
  calculatorScreen.value += (splitInput[splitInput.length -1] / 100)
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
	if(!calculatorScreen.value) return;
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
		if(!calculatorScreen.value) return;
  if(calculatorScreen.value[calculatorScreen.value.length-1].match(operatorRegex)){
   calculatorScreen.value = calculatorScreen.value.slice(0, -1);
   calculatorScreen.value += operator.innerText;
  }else if(operatorCount == 0){
  calculatorScreen.value += operator.innerText
  operatorCount += 1;
 }else{
		console.log(calculatorScreen.value);
  calculatorScreen.value = calculateInput(calculatorScreen.value) + operator.innerText;
 }

 });
});




console.log(buttonArr);
console.log(operator);
console.log(clearInput);
console.log(calculatorScreen.value.length);
console.log(isNaN("1.3.4"));
console.log(calculateInput("3.4÷3.12"));