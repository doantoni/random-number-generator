let number = document.querySelector(".container")
let exactNumber = document.querySelector("#exactNumber")

let button = document.querySelector("button")

button.addEventListener("click", function(){
	let randNum = Math.floor(Math.random() * 100000000000000000 + 1);
	console.log(randNum)
	exactNumber.innerHTML = randNum
}) 