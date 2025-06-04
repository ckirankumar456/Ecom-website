const fruits = document.getElementsByClassName("fruit");
// fruits[2].style.backgroundColor = "yellow";*/

/*for (let fruit of fruits) {
  fruit.style.backgroundColor = "yellow";
}
*/

Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});
