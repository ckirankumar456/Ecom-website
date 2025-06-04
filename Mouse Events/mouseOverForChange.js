const myBox = document.getElementById("myBox");
/*function changeColor(event) {
  event.target.style.backgroundColor = "green";
  event.target.textContent = "Ouch !";
}
myBox.addEventListener("mouseover", changeColor);*/
myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "green";
  event.target.textContent = "Ouch !";
});
