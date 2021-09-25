let number = document.querySelector(".container")
let generatedNum = document.querySelector(".generatedNum")
let input = document.querySelector("input")

let digits = 1; 

input.addEventListener("change", function(e){
  digits = e.target.value;
})

let button = document.querySelector("button")

button.addEventListener("click", function(){
	let randNum = Math.floor(Math.floor(Math.random() * 10) * Math.pow(9, digits) / 10);
	console.log(randNum)
	generatedNum.innerHTML = randNum
}) 