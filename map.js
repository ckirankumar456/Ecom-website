const names = ["kiran", "suman", "vamsi", "babji"];
const students = names.map(upperCase);
console.log(students);
function upperCase(element) {
  return element.toUpperCase();
}

/*const numbers = [1, 2, 3, 4, 5];
const sqares = numbers.map(sqare);
console.log(sqares);
function sqare(element) {
  return Math.pow(element, 2);
}*/
