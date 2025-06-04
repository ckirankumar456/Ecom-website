const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myBtn");
myButton.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "OUCH!";
});
