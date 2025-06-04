// let pi = 3.145;
// let redius;
// let circumforence;

// redius = Number(prompt("enter redius of circle "));
// circumforence = 2 * pi + redius;
// console.log(circumforence);

let pi = 3.145;
let redius;
let circumforence;
document.getElementById("mysub").onclick = function () {
  redius = document.getElementById("mytext").value;
  redius = Number(redius);
  circumforence = 2 * pi * redius;
  document.getElementById("myh2").textContent = circumforence;
};
