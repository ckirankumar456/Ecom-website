// const fruits = [
//   { name: "apple", color: "red", calories: 52 },
//   { name: "orange", color: "orange", calories: 25 },
//   { name: "banana", color: "yellow", calories: 45 },
//   { name: "coconut", color: "white", calories: 18 },
//   { name: "pineapple", color: "yellow", calories: 30 },
// ];
// fruits.push({ name: "grapes", color: "purple", calories: 18 });
/*console.log(fruit);
//console.log(fruit[4].name);
fruit.pop(fruit[4]);*/

/*fruit.forEach((fruit) => {
  console.log(fruit);
});*/

/*fruit.forEach((fruits) => {
  console.log(fruits.color);
});*/

//console.log(fruit.slice(1, 3));

/*const maxFruit = fruits.reduce((fruit, max) =>
  fruit.calories > max.calories ? fruit : max
);
console.log(maxFruit);*/

/*const fruitName = fruits.map((fruit) => fruit.calories).filter((fruit)=>fruit.calories>=20)
console.log(fruitName >= 20);*/

//const need = fruitName.filter((fruit) => fruit.calories >= 20);
/*const yellowFruit = fruits.filter((fruit) => fruit.color === "yellow");
console.log(yellowFruit);*/

/*const needs = fruits.filter((fruit) => fruit.calories <= 20);
console.log(needs);
*/
// const needCalories = fruits.map((fruit) => fruit.calories);
// function needs(forCalories) {
//   return forCalories.filter((fruitsCalories) => fruitsCalories.calories >= 20);
// }
// const result = needs(needCalories);
// console.log(result);

const fruits = [
  { name: "apple", color: "red", colories: 87 },
  { name: "orange", color: "orange", colories: 45 },
  { name: "bananaa", color: "yellow", colories: 34 },
  { name: "coconut", color: "white", colories: 67 },
  { name: "pineapple", color: "yellow", colories: 45 },
];
// fruits.sort((a, b) => a.colories - b.colories);
// console.log(fruits);

// console.log(fruits[0].name);
// console.log(fruits[1].name);
// console.log(fruits[3].name);

// fruits.unshift({ name: "grapes", color: "purple", colories: 72 });
// console.log(fruits.pop());
// fruits.splice(0, 2);
// console.log(fruits);

// fruits.forEach((fruit) => console.log(fruit));
// let fruitName = fruits.map((fruit) => fruit.name);
// console.log(fruitName);

// const yellowFruit = fruits.filter((fruit) => fruit.color === "yellow");
// console.log(yellowFruit);

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.colories > max.colories ? fruit : max
);
const totalColories = fruits.reduce((sum, fruit) => sum + fruit.colories, 0);
const highColories = fruits.filter((fruit) => fruit.colories > 60);
console.log(maxFruit);
console.log(totalColories);
console.log(highColories);

const objArr = [
  { name: "kiran", age: 22, gender: "male" },
  { name: "suman", age: 34, gender: "male" },
  { name: "vamsi", age: 25, gender: "male" },
  { name: "meghana", age: 23, gender: "female" },
];
// objArr.forEach((studentDetails) => {
//   console.log(studentDetails);
// });

// objArr.forEach(function (studentDetails) {
//   console.log(studentDetails);
// });
