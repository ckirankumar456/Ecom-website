let fatherGave = 0;
let cash = 0;
let days = 0;

while (500 >= cash) {
  fatherGave = window.prompt("father gave money today");
  fatherGave = Number(fatherGave);
  cash = cash + fatherGave;
  days++;
}
console.log("how many days " + days);
console.log("total amount " + cash);
document.getElementById("myh1").textContent = "kjgfjgjg" + cash;
