/*let numbers = [1, 3, 5, 2, 6, 9, 0, 7, 4, 8, 10];
numbers.sort((a, b) => a - b);
console.log(numbers);*/

const peoples = [
  { name: "suman", age: 25, gpa: 7.5 },
  { name: "kiran", age: 23, gpa: 7.2 },
  { name: "vamsi", age: 26, gpa: 6.8 },
  { name: "babji", age: 26, gpa: 7.8 },
  { name: "jagan", age: 28, gpa: 6.5 },
];
peoples.sort((a, b) => a.gpa - b.gpa);
console.log(peoples);
