const greenButton = document.querySelector(".green-mode");
const redButton = document.querySelector(".red-mode");
const blueButton = document.querySelector(".blue-mode");
const body = document.body;

greenButton.addEventListener("click", () => {
	if(body.classList.contains("blue-mode") || body.classList.contains("red-mode")) {
		body.className = "";
	}
	body.classList.toggle("green-mode");
});

redButton.addEventListener("click", () => {
	if(body.classList.contains("blue-mode") || body.classList.contains("green-mode")) {
		body.className = "";
	}
	body.classList.toggle("red-mode");
});

blueButton.addEventListener("click", () => {
	if(body.classList.contains("green-mode") || body.classList.contains("red-mode")) {
		body.className = "";
	}
	body.classList.toggle("blue-mode");
});

	
