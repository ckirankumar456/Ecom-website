const ageInput = document.getElementById("age");

ageInput.addEventListener("focus", function () {
  ageInput.style.backgroundColor = "lightgreen";
});

ageInput.addEventListener("blur", function () {
  ageInput.style.backgroundColor = " ";
});
