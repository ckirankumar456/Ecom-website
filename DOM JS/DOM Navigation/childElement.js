const element = document.getElementById("fruits");
const child = element.children;

// Array.from(child).forEach((childs) => {
//   childs.style.backgroundColor = "yellow";
// });

child[1].style.backgroundColor = "yellow";
