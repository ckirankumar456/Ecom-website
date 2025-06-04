/*  map(String)   */
/* -------  */

/*const name = ["kiran", "kumar", "suman", "vamsi"];
const names = name.map(upperCase);
console.log(names);
function upperCase(element) {
  return element.toUpperCase();
}*/
/*const name = ["kiran", "kumar", "suman", "vamsi"];
const names = name.map(function (element) {
  return element.toUpperCase();
});
console.log(names);
*/
/*const name = ["kiran", "kumar", "suman", "vamsi"];
const names = name.map((element) => element.toUpperCase());
console.log(names);*/

/*   map(int)   */
/*  ----------  */

/*const numbers = [1, 2, 3, 4, 5];
const spuares = numbers.map(square);
console.log(spuares);
function square(element) {
  return Math.pow(element, 2);
}*/
/*const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});
console.log(squares);*/
/*const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);*/

/*   forEach(int)   */
/*  --------------  */

/*const numbers = [1, 2, 3, 4, 5];
numbers.forEach(double);
numbers.forEach(display);
function double(element, index, array) {
  array[index] = element * 2;
}
function display(element){
    console.log(element)
}*/
/*const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (element, index, array) {
  array[index] = element * 2;
});
numbers.forEach(function (element) {
  console.log(element);
});
*/

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((element, index, array) => (array[index] = element * 2));
// numbers.forEach((element) => console.log(element));

// let names = ["kiran", "pavan", "suman"];
// const uppercase = names.map(function (element) {
//   return element.toUpperCase();
// });
// console.log(uppercase);

// const names = ["kiran", "pavan", "suman"];
// const uppercase = names.map(touppercase);
// function touppercase(element) {
//   return element.toUpperCase();
// }
// console.log(uppercase);

// const names = ["kiran", "pavan", "suman"];
// const uppercase = function (element) {
//   console.log(element.toUpperCase());
// };
// names.map(uppercase);

const names = ["kiran", "pavan", "suman"];
const nameUpper = names.map((element) => {
  return element.toUpperCase();
});
console.log(nameUpper);
