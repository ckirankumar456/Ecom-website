/*const numbers = [1, 2, 3, 4, 5];
const sqares = numbers.map(spar);
console.log(spares);
function sqar(element) {
  return Math.pow(element, 2);
}*/
/*const names = ["kiran", "suman", "pavan"];
console.log(names.map(uppercase));
function uppercase(element) {
  return element.toUpperCase();
}*/
/*const numbers = [1, 2, 3, 4, 5];
const sqares = numbers.map(sqare);
console.log(sqares);
function sqare(element) {
  return Math.pow(element, 3);
}*/
/*const names = ["kiran", "suman", "vamsi", "pavan"];
const upperChars = names.map(uppercase);
console.log(upperChars);
function uppercase(element) {
  return element.toUpperCase();
}*/
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(double);
numbers.forEach(display);
function double(element, index, array) {
  array[index] = element * 2;
}
function display(element) {
  console.log(element);
}
