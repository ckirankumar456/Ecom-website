const myButton = document.getElementById("myButton");

/*myButton.classList.add("enable");
myButton.classList.remove("enable");*/

/* myButton.addEventListener("mouseover", (event) => {
  event.target.classList.add("hover");
}); */

/* myButton.addEventListener("mouseout", (event) => {
  event.target.classList.add("hover");
}); */

/* myButton.addEventListener("click", (event) => {
  event.target.classList.add("hover");
}); */

/* myButton.addEventListener("click", (event) => {
  if (event.target.classList.contains("disenable")) {
    event.target.textContent += " K";
  } else {
    event.target.classList.replace("enable", "disenable");
  }
}); */

/* myButton.addEventListener("click", (event) => {
  event.target.classList.toggle("disenable");
}); */

/* myButton.classList.add("enable");
myButton.addEventListener("click", (event) => {
  event.target.classList.replace("enable", "disenable");
}); */

myButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disenable")) {
      event.target.textContent += " K";
    } else {
      event.target.classList.replace("enable", "disenable");
    }
  });
});
