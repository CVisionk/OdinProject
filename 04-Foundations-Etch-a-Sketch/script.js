const container_div = document.querySelector(".container");
const btn = document.querySelector(".btn");
const reset_grid = document.querySelector(".reset_grid");
reset_grid.style.display = "none";
//container_div.textContent = "there";


function makegrid(grid_number){
 container_div.innerHTML = '';
 const containerWidth = container_div.offsetWidth + container_div.offsetWidth/6000;

 for(let i=0; i < grid_number*grid_number;i++)
 {
  //create element and give style attributes
  const _div = document.createElement("div");
  _div.style.width = `${containerWidth / grid_number}px`;
  console.log(containerWidth / grid_number);
  _div.textContent = " ";
  _div.style.flex = `1 0 ${grid_number / 100}%;`
  _div.style.aspectRatio = '1';

  _div.classList.add("grid_item");
  _div.addEventListener('mouseenter', () =>
  {
  _div.classList.add("draw");
  });

  container_div.appendChild(_div);
  }
  reset_grid.style.display = "inline";
}



function getDigit()
{
 let userInput = prompt("Enter an integer for _ X _ grid:");
 let number = parseFloat(userInput);

 if (!isNaN(number) && Number.isInteger(number) && number % 1 === 0.0)
{
 return userInput;
} else
{
 alert("Input is not a valid integer. Eg 3.4 and bob is not an integer");
 return;
}
}


btn.addEventListener("click", ()=>{
 const grid_number = getDigit();
 if(grid_number){
  makegrid(grid_number);
 }
});

reset_grid.addEventListener("click", ()=> {
 document.querySelectorAll(".draw").forEach(grid_item => {
  grid_item.classList.remove("draw");
 });
});