// const element1 = document.getElementById("fruits");
// // const element2 = document.getElementById("vegetables");
// // const element3 = document.getElementById("desserts");
// const firstChild = element1.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ulElement) => {
  const firstChild = ulElement.firstElementChild;
  firstChild.style.backgroundColor = "yellow";
});
