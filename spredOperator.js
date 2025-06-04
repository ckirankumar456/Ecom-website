/*let number = [1, 2, 3, 4, 5];
let max = Math.max(...number);
console.log(max);*/

/*let username = "kiran kumar";
let letter = [...username].join(" ");
console.log(letter);*/

/*let fruit = ["apple", "orange", "banana"];
let vegetables = ["carrotes", "celery", "potatoes"];
let foods = [...fruit, ...vegetables];
console.log(foods);*/

// importent

function openFridge(...foods) {
  console.log(...foods);
}
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";
openFridge(food1, food2, food3, food4, food5);
