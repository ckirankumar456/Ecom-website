// function openFridge(...foods) {
//   console.log(...foods);
// }
// function getFood(...foods) {
//   return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// // openFridge(food1, food2, food3, food4, food5);

// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }
// const total = sum(1, 2, 3);
// console.log(`your total is ${total}`);

// function printme(...names) {
//   return names.join(" ");
// }
// let words = printme("kiran", "vamsi", "suman", "pavan");
// console.log(words);

// function fun(a, b, ...c) {
//   console.log(a, b);
//   console.log(c);

//   console.log(c[0]);
//   console.log(c.length);
//   console.log(c.indexOf("babji"));
// }
// fun("pavan", "kiran", "suman", "babji", "jagan");

// function sum(...add) {
//   console.log(add.reduce((acc, curr) => acc + curr, 0));
// }
// sum(1, 2, 3, 4, 5);

// const [first, second, ...rest] = [10, 20, 30, 40, 50];
// console.log(first);
// console.log(second);
// console.log(...rest);

// const person = { name: "kiran", age: 23, city: "hydarabad", country: "india" };
// const { name, ...rest } = person;
// console.log(name);
// console.log(rest);

// const names = ["kiran", "vasmi", "suman", "pavan"];
// const [name, ...remain] = names;
// console.log(name);
// console.log([...remain]);

// const names = ["kiran", "vamsi", "suman", "pavan", "jagan", "babji"];
// const [first, second, third, ...remain] = names;
// console.log([first]);
// console.log([second]);
// console.log([third]);
// console.log([...remain]);

// const numbers = [1, 2, 3, 4, 5, 6];
// const [first, second, ...rest] = numbers;
// console.log(numbers.push(8, 9));
// console.log(second);
// console.log(...rest);
// console.log(numbers);

// const colors = ["red", "green", "blue"];
// const [first, second, third] = colors;

// console.log(first);
// console.log(second);
// console.log(third);
