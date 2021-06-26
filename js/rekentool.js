console.log("JS file loaded")

const inputFieldDistance = document.querySelector(".distance");
const inputFieldFuelUsage = document.querySelector(".fuel-usage");
const buttonCalculate = document.querySelector(".calculate");
const inputFieldFuelPrice = document.querySelector(".fuel-price");
const outputResult = document.querySelector(".result");

if (buttonCalculate){
    buttonCalculate.addEventListener("click", function() {
        outputResult.innerHTML = calculate();
    });
}


function calculate(){
    let result = (inputFieldDistance.value / inputFieldFuelUsage.value) * inputFieldFuelPrice.value;
    outputResult.textContent = result;
    console.log(result);
}

