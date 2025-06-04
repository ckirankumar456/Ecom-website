// function* generateNumbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const gen = generateNumbers();
// for (let element of gen) {
//   console.log(element);
// }

// function* simpleGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const iterator = simpleGenerator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function* generator() {
//   yield "hello";
//   yield "reader!";
// }
// let it = generator();
// console.log(it.next());

// function* nextNatural() {
//   let naturalNumber = 1;

//   while (true) {
//     yield naturalNumber++;
//   }
// }
// let gen = nextNatural();
// for (let i = 0; i < 10; i++) {
//   console.log(gen.next().value);
// }

// let array = ["a", "b", "c"];
// function* generator(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     yield arr[i++];
//   }
// }

// const it = generator(array);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// let array = ["kiran", "vamsi", "suman"];
// function* generator(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     yield arr[i++];
//   }
// }
// const it = generator(array);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

// const arr = ["a", "b", "c"];
// function* generator() {
//   yield 1;
//   yield* arr;
//   yield 2;
// }
// for (let value of generator()) {
//   console.log(value);
// }

// const array = ["kiran", "vasmi", "suman"];
// function* generator() {
//   yield 1;
//   yield* array;
//   yield 2;
// }
// for (let value of generator()) {
//   console.log(value);
// }

// let createOwnIterable = {
//   *[Symbol.iterator]() {
//     yield "a";
//     yield "b";
//     yield "c";
//   },
// };
// for (let value of createOwnIterable) {
//   console.log(value);
// }

// function* generator() {
//   yield "a";
//   return "result";
//   yield "b";
// }
// let it = generator();
// console.log(JSON.stringify(it.next()));
// console.log(JSON.stringify(it.next()));
