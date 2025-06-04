const h3Elements = document.getElementsByTagName("h3");
const liElements = document.getElementsByTagName("li");
// h3Elements[1].style.backgroundColor = "yellow";

/*for (let fruit of h3Elements) {
  fruit.style.backgroundColor = "lightGreen";
}*/

/*Array.from(h3Elements).forEach((fruit) => {
  fruit.style.backgroundColor = "lightGreen";
});*/

// liElements[1].style.backgroundColor = "lightGreen";

for (let fruit of liElements) {
  fruit.style.backgroundColor = "lightGreen";
}
