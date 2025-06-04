// const elements = document.querySelectorAll(".fruits");
// elements[2].style.backgroundColor = "yellow";

// const h4Element = document.querySelectorAll("h4");
// h4Element[1].style.backgroundColor = "blue";

// Array.from(h4Element).forEach((element) => {
//   element.style.backgroundColor = "blue";
// });

// for (let element of h4Element) {
//   element.style.backgroundColor = "blue";
// }
const liElement = document.querySelectorAll("li");
// liElement[0].style.backgroundColor = "yellow";

// for (let element of liElement) {
//   element.style.backgroundColor = "yellow";
// }

Array.from(liElement).forEach((elements) => {
  elements.style.backgroundColor = "blue";
  elements.style.color = "white";
});
