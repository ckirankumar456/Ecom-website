const element = document.getElementById("fruits");
const children = element.children;
// children[2].style.background = "yellow";

/*Array.from(children).forEach((child) => {
  child.style.backgroundColor = "yellow";
});*/

for (let fruit of children) {
  children.style.backgroundColor = "green";
}
