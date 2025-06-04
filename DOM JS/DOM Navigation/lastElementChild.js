// const element = document.getElementById("fruits");
// // const element2 = document.getElementById("vegetables");
// // const element3 = document.getElementById("desserts");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

const element = document.querySelectorAll("ul");
element.forEach((ele) => {
  const lastChild = ele.lastElementChild;
  lastChild.style.backgroundColor = "yellow";
});
