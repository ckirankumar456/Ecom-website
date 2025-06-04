// (function () {
//   console.log("hello Reader !");
// })();

// let sum = (function (x, y, z) {
//   let result = x + y + z;
//   return result;
// })(10, 20, 30);
// console.log("result of sum : " + sum);

// const counter = (function () {
//   var count = 0;
//   return {
//     increment: function () {
//       count++;
//     },
//     decrement: function () {
//       count--;
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// })();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(counter.getCount());
// console.log(counter.count);

// let name = "kiran";
// {
//   let name = "suman";
//   console.log(name);      // suman
// }
// console.log(name);       // kiran

//                                            regular function

// function welcome(name) {
//   console.log("wellcome " + " " + name);
// }
// welcome("sai charan");

//                                             IIF function

(function (name) {
  console.log("wellcome " + " " + name);
})("kiran");
