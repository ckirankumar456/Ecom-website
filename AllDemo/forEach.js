/*const numbers = [1, 2, 3, 4, 5];
numbers.forEach(double);
numbers.forEach(display);
function double(element, index, array) {
  array[index] = element * 2;                
}
function display(element) {
  console.log(element);
}*/
let fruit = ["apple", "orange", "banana", "coconut"];
fruit.forEach(capital);
function capital(element, index, array) {
  array[index] = element.charAt(0).toUpperCase();
}
function capital(element) {
  console.log(element);
}
