//  let sum = function (a, b) {
//   let c = a + b;
//   console.log(c);
// };
// sum(3, 4);

const sumOfDigits = function (num) {
  let sum = 0;
  while (num > 0) {
    let rem = num % 10;
    sum += rem;
    num = parseInt(num / 10);
  }
  console.log(`sum of digit ${sum}`);
};
sumOfDigits(55);
