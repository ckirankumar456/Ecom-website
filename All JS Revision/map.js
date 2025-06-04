// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// console.log(squares);
// function square(element) {
//   return Math.pow(element, 2);
// }

// const numbers = [1, 2, 3, 4, 5];
// numbers.map((num) => {
//   console.log(num * 2);
// });

// const student = ["kiran", "kumar", "vamsi", "suman"];
// const studentUpper = student.map(uppercase);
// console.log(studentUpper);
// function uppercase(element) {
//   return element.toUpperCase();
// }

// const student = ["kiran", "kumar", "pavan", "vasmi", "suman"];
// student.map((element) => {
//   console.log(element.toUpperCase());
// });

// const student = ["kiran", "pavan", "suman", "vamsi"];
// const studentUpper = student.map(upper);
// function upper(element) {
//   return element.toUpperCase();
// }
// console.log(studentUpper);

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);
// function square(element) {
//   return Math.pow(element, 2);
// }
// console.log(squares);

// const student = ["kiran", "pavan", "suman", "vasmi"];
// const capitalFirstChar = student.map(firstChar);
// function firstChar(element) {
//   return element.charAt(0).toUpperCase();
// }
// console.log(capitalFirstChar);

// const users = [{ name: "arun" }, { name: "balu" }, { name: "kiran" }];
// const names = users.map((user) => user.name);
// console.log(names);

// const celsius = [0, 10, 20, 30];
// console.log(celsius.map((c) => (c * 9) / 5 + 32));

const emails = ["user1@example.com", "user2@test.com", "user3@demo.com"];
console.log(emails.map((element) => element.split("@")[1]));
