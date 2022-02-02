const submitBtn = document.querySelector(".submitBtn");
const heightInput = document.querySelector("#heightInput");
const weightInput = document.querySelector("#weightInput");
let bmival = document.querySelector(".bmival");
let statusval = document.querySelector(".statusval");

submitBtn.addEventListener("click", calculate);
function calculate(e) {
  e.preventDefault();
  const h = parseFloat(heightInput.value, 10);
  const w = parseFloat(weightInput.value, 10);
  const bmi = w / (0.01 * h) ** 2; //(Height is converted to metres)
  const roundedBmi = parseFloat(bmi.toFixed(1));
  bmival.textContent = roundedBmi;
  // To display status

  // let status = statusval.textContent;
  if (roundedBmi < 18.5) {
    statusval.textContent = "Underweight";
    statusval.style.color = "red";
    bmival.style.color = "red";
    // statusval.classList.add("glow");
    // bmival.classList.add("glow"); -> this makes the text glow
  } else if (roundedBmi >= 18.5 && roundedBmi < 24.9) {
    statusval.textContent = "Normal Weight";
    statusval.style.color = "green";
    bmival.style.color = "green";
  } else if (roundedBmi >= 25.0 && roundedBmi < 29.9) {
    statusval.textContent = "Overweight";
    statusval.style.color = "#FFA500";
    bmival.style.color = "#FFA500";
  } else if (heightInput.value == "" || weightInput.value == "") {
    statusval.textContent = "-";
    bmival.textContent = "-";
  } else {
    statusval.textContent = "Obese";
    statusval.style.color = "red";
    bmival.style.color = "red";
  }
}
