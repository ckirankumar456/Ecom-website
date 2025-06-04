/*let numbers = [1, 2, 3, 4, 5, 6];
let maximum = Math.max(...numbers);
console.log(maximum);*/

/*let username = "kiran kumar";
let letter = [...username].join("-");
console.log(letter);*/

/*let fruits = ["apple", "orange", "banana", "mango", "coconut"];
let vegetables = ["carrots", "celery", "tomota", "potatoes"];
let foods = [...fruits, ...vegetables];
console.log(foods);*/

/*function openfridge(...foods) {
  console.log(...foods);
}
const food1 = "pizza";
const food2 = "burger";
const food3 = "sushi";
const food4 = "raman";
const food5 = "hotdog";
openfridge(food1, food2, food3, food4, food5);*/

function sum(...numbers) {
  let result;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
const total = sum(1, 2, 3, 4, 5);
console.log("your total is " + total);
