/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let evenNums = numbers.filter(isOdd);
console.log(evenNums);
function isEven(element) {
  return element % 2 == 0;
}
function isOdd(element) {
  return element % 2 !== 0;
}*/
/*const ages = [13, 11, 16, 17, 18, 19, 20, 22, 26, 28, 31, 35, 38];
const adults = ages.filter(isAdult);
console.log(adults);
function isAdult(element) {
  return element <= 18;
}*/
const words = ["apple", "orange", "banana", "mango", "coconut"];
const shortwords = words.filter(getshortWords);
console.log(shortwords);
function getshortWords(element) {
  return element.length <= 5;
}
