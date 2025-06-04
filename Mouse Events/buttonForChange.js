const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
/*myButton.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "Ouch !";
});*/

/*myButton.addEventListener("mouseover", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "Ouch !";
});
*/

myButton.addEventListener("mouseout", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "Ouch !";
});
