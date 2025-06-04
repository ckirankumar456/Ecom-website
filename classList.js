const myButton = document.getElementById("myButton");
/*myButton.classList.add("enable");
myButton.classList.remove("enable");*/

/*myButton.addEventListener("mouseover", (event) => {
  event.target.classList.add("hover");
});*/

/*myButton.addEventListener("mouseout", (event) => {
  event.target.classList.add("hover");
});*/

/*myButton.classList.add("enable");
myButton.addEventListener("click", (event) => {
  event.target.classList.replace("enable", "disenable");
});*/

myButton.addEventListener("click", (event) => {
  if (event.target.classList.contains("disenable")) {
    event.target.textContent += " K";
  }
});
//let buttons = document.querySelectorAll(".buttons");
/*buttons.forEach((button) => {
  button.classList.add("enable");
});*/

/*buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});*/

/*buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
});*/

/*buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disenable")) {
      event.target.textContent += " K";
    } else {
      event.target.classList.replace("enable", "disenable");
    }
  });
});
*/
