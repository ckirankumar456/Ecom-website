// function getUserInfo() {
//   const dt = Date.now() + 5000;
//   while (Date.now() < dt) {
//     continue;
//   }
//   console.log("task 2"); //                   syncronous
// }
// console.log("task 1");
// getUserInfo();
// console.log("task 3");

console.log("task 1");
setTimeout(() => {
  console.log("task 2"); //                     asyncronous
}, 3000);
console.log("task 3");
