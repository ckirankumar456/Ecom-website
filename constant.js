let pi = 3.45;
let radius;
let circumforence;
radius = window.prompt("enter radius of a circle");
document.getElementById("mysubmit").onclick = function () {
  radius = document.getElementById("mytext").value;
  radius = Number(radius);
  circumforence = 2 * pi + radius;
  document.getElementById("myh3").textContent = circumforence + "cm";
};
