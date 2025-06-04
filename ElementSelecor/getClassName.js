const fruits = document.getElementsByClassName("fruits");
//fruits[0].style.backgroundColor = "yellow";

/*for (let fruit of fruits) {
  fruit.style.backgroundColor = "yellow";
}*/

Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});
