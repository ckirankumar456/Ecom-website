// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 20];
// let evenNumbers = numbers.filter(isEven);
// function isEven(element) {
//   return element % 2 === 0;
// }
// console.log(evenNumbers);

// const age = [16, 14, 22, 21, 18, 17, 18, 23, 19, 20];
// let print = age.filter(isPrint);
// console.log(print);
// function isPrint(element) {
//   return element > 18;
// }

// const names = ["apple", "bat", "cat", "dog", "elephant"];
// const shortWords = names.filter(isShortWord);
// console.log(shortWords);

// function isShortWord(element) {
//   return element.length <= 4;
// }

// const people = [{ age: 16 }, { age: 21 }, { age: 18 }];
// const adults = people.filter((person) => person.age >= 18);
// console.log(adults);

// const mixedArray = [0, "hello", " ", false, 42];
// console.log(mixedArray.filter((element) => element));

// const numbers = [-10, 5, -3, 8, 0];
// console.log(numbers.filter((element) => element > 0));

const numbers = [
  10, 34, 23, 45, 7, 54, 7, 56, 34, 78, 56, 45, 67, 78, 43, 67, 87, 44, 50,
];
console.log(numbers.filter((element) => element > 50 && element < 100));
