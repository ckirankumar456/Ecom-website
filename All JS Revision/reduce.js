// const prlice = [5, 20, 10, 30, 50, 25];
// const total = prlice.reduce(sum);
// console.log(total.toFixed(2));
// function sum(accumulator, element) {
//   return accumulator + element;
// }

const numbers = [34, 56, 23, 34, 54, 42, 32, 33];
const maximum = numbers.reduce(getMax);
console.log(maximum);
function getMax(accumulator, element) {
  return Math.min(accumulator, element);
}
