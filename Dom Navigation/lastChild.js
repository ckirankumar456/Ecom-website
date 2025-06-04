/*const fruits = document.getElementById("fruits");
const lastElement = fruits.lastElementChild;
lastElement.style.backgroundColor = "green";*/

const fruits = document.querySelectorAll("ul");
fruits.forEach((fruit) => {
  const lastElement = fruit.lastElementChild;
  lastElement.style.backgroundColor = "green";
});
