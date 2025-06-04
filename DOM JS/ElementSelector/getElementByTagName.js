const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// h4Elements[0].style.backgroundColor = "blue";
// liElements[4].style.backgroundColor = "yellow";

// for (let headingElement of h4Elements) {
//   headingElement.style.backgroundColor = "blue";
// }

// for (let listElement of liElements) {
//   listElement.style.backgroundColor = "yellow";
// }

Array.from(h4Elements).forEach((h4elements) => {
  h4elements.style.backgroundColor = "blue";
});

Array.from(liElements).forEach((listelement) => {
  listelement.style.backgroundColor = "yellow";
});
