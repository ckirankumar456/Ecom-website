// let numbers = [6, 3, 5, 9, 4, 2, 1, 7, 6, 8];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

const people = [
  { name: "kiran", age: 23, gpa: 3.5, branch: "mba" },
  { name: "suman", age: 21, gpa: 3.2, branch: "mca" },
  { name: "vamsi", age: 26, gpa: 3.8, branch: "mba" },
  { name: "babji", age: 27, gpa: 3.5, branch: "m.com" },
  { name: "pavan", age: 25, gpa: 4.1, branch: "B.tech" },
];
people.sort((a, b) => a.age - b.age);
console.log(people);
