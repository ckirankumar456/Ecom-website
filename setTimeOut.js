// setTimeout(() => window.alert("hello " + person), 5000);
// const person = prompt("enter your name");

// function sayHello() {
//   window.alert("hello kiran");
// }
// setTimeout(sayHello, 3000);

// const setTimeId = setTimeout(() => window.alert("hello kiran"), 3000);
// clearTimeout(setTimeId);

// function startTimer() {
//   setTimeout(() => window.alert("hello"), 3000);
// }

// let timeOutId;
// function startTimer() {
//   timeOutId = setTimeout(() => window.alert("hello kiran"), 4000);
//   console.log("STARTED");
// }
// function clearTimer() {
//   clearTimeout(timeOutId);
//   console.log("CLEARED");
// }

// function delayedFunction() {
//   console.log("this won't be executed due to clearTimeout");
// }
// let timeOutId = setTimeout(delayedFunction, 3000);
// clearTimeout(timeOutId);
// console.log("time out canceled");

console.log("Start");
setTimeout(function () {
  console.log("delayed log after 2000 millisecond");
}, 2000);
console.log("End");
