const myBox = document.getElementById("myBox");
/*document.addEventListener("keydown", (event) => {
  myBox.textContent = "Change";
  myBox.style.backgroundColor = "tomato";
});*/

/*document.addEventListener("keyup", (event) => {
  myBox.textContent = "Change";
  myBox.style.backgroundColor = "tomato";
});
*/

const moveAmount = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "Arrowup":
        y -= moveAmount;
        break;
      case "Arrowdown":
        y += moveAmount;
        break;
      case "Arrowleft":
        x -= moveAmount;
        break;
      case "Arrowright":
        x += moveAmount;
        break;
    }
    myBox.style.top = y + " px";
    myBox.style.left = x + " px";
  }
});
