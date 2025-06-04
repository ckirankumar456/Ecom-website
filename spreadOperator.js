// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// console.log(maximum);

// let minimum = Math.min(...numbers);
// console.log(minimum);

// let usernames = ["kiran kumar"];
// let letters = [...usernames[0]];   //                    array formate
// console.log(letters);

// let usernames = ["kiran kumar"];
// let letters = [...usernames[0]]; //                        without array formate
// letters.forEach((letter) => console.log(letter));

// let fruits = ["apple", "orange", "bananaa"];
// let vegetable = ["carrots", "celery", "potato"];
// let foods = [...fruits, ...vegetable, "eggs", "milk", "onions"];
// console.log(foods);

// const numbers = [1, 2, 3];
// const combined = [4, 5, 6];
// console.log(...numbers, ...combined);

// function multiply(a, b, c, d, e) {
//   return a * b * c * d * e;
// }
// const numbers = [2, 3, 4, 5, 6, 7, 8];
// console.log(multiply(...numbers));

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const merged = { ...obj1, ...obj2 };
// console.log(merged);

// const updated = { ...obj1, b: 20 };
// console.log(updated);

// let a = [10, 20];
// // let b = [...a, 30, 40];
// let c = [30, 40, ...a, 50, 60, 10, 20];
// // console.log(b);
// console.log(c);

// let a = [1, 2, 3, 4, 5];
// console.log(Math.min(...a));

// const user = { name: "kiran", age: 23 };
// // const cloneUsr = { ...user };
// // console.log(cloneUsr);
// console.log({ ...user });

// const names = ["kiran", "vamsi", "suman"];
// console.log([...names]);

const name = { name2: "kiran", age: 23 };
const name1 = { name: "suman", location: "proddaturu" };
console.log({ ...name, ...name1 });
