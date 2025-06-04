// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(double);
// function double(element) {
//   display(element * 2);
// }
// function display(element) {
//   console.log(element);
// }

// let fruits = ["apple", "orange", "banaana", "coconut"];
// fruits.forEach(capitalize);
// function capitalize(element, index, array) {
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// function capitalize(element) {
//   console.log(element);
// }

// let fruits = ["apple", "orange", "banaana", "coconut"];
// fruits.forEach(capitalize);
// function capitalize(element) {
//   console.log(element.charAt(0).toUpperCase());
// }

// let fruits = ["apple", "orange", "banaana", "coconut"];
// function capitalizeWords(array) {
//   array.forEach((element, index, arr) => {
//     arr[index] = element.charAt(0).toUpperCase() + element.slice(1);
//   });
// }
// capitalizeWords(fruits);
// console.log(fruits);

// const numbers = [1, 2, 3, 4, 5];
// const ans = [];
// numbers.forEach((element) => ans.push(element ** 2));
// console.log(ans);

// const numbers = [1, 2, 3, 4, 5];
// var sum = 0;
// numbers.forEach((element) => (sum += element));
// console.log(sum);

// const person = { name: "kiran", age: 23, city: "New York" };
// Object.keys(person).forEach((key) => {
//   console.log(`${key}: ${person[key]}`);
// });

// const personDetails = [
//   { name: "suman", age: 23, village: "poddaturu", qualification: "mca" },
//   { name: "kiran", age: 22, village: "yerraguntla", qualification: "mba" },
//   { name: "vamsi", age: 25, village: "narsimhapuram", qualification: "b.tech" },
// ];

// personDetails.push({
//   name: "pavan",
//   age: 26,
//   village: "yerraguntla",
//   qualification: "btech'EEE",
// });

// personDetails.forEach((person) => {
//   console.log(`Name: ${person.name}, Marks: ${person.age}`);
// });

// personDetails.forEach((person) => {
//   Object.keys(person).forEach((key) => {
//     console.log(`${key}: ${person[key]}`);
//   });
//   console.log(" ");
// });
// personDetails.sort((a, b) => a.age - b.age);
// console.log(personDetails);

const numbers = [1, 2, 3, 4, 5];
const num = [];
numbers.forEach((element) => {
  num.push(element ** (1 / 3));
});
console.log(num);
