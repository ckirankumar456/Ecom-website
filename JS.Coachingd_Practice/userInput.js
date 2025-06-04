// const kiran = prompt("what is your name ");
// console.log(kiran);

/* let age = 23;
let price = 10.45;
let gpa = 2.1;
console.log(typeof age);
console.log(`you are ${age} year old`);
console.log(`the price is $ ${price}`);
console.log(`your gpa is : ${gpa}`); */

let username;
document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("mytext").value;
  document.getElementById("myH1").textContent = "Hello " + username;
};
