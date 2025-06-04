//                      Map()

// const number = [1, 2, 3, 4, 5];
// const squares = number.map((num) => num * num);
// console.log(squares);

//                     filter()

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenNum = numbers.filter((num) => num % 2 == 0);
// console.log(evenNum);

//                     Reduce()

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const sum = numbers.reduce((accumulated, current) => accumulated + current, 0);
// console.log(sum);

// function repeatNTimes(n, callback) {
//   for (let i = 1; i <= n; i++) {
//     callback(i);
//   }
// }
// repeatNTimes(3, (i) => {
//   console.log("iteration: ", i);
// });

// function multiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }
// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(4));
// console.log(triple(5));

function add(x) {
  return x + 2;
}
function multiply(x) {
  return x * 3;
}
function compose(f, g) {
  return function (x) {
    return g(f(x));
  };
}
const addThenMultiply = compose(add, multiply);
console.log(addThenMultiply(4));
