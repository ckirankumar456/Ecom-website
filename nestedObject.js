// // person{address{},constactInfo{}}
// // shoppingCart{keyboard{},mouse{},monitor{}}

// const person = {
//   firstName: "kiran",
//   lastName: "kumar",
//   age: 36,
//   isStudent: true,
//   hobbies: ["cricket", "coding", "cooking"],
//   address: {
//     street: "124 conch st.",
//     city: "india",
//     county: "int.water",
//   },
// };
// // console.log(person.firstName);
// // console.log(person.isStudent);
// // console.log(person.address.city);
// // console.log(person.hobbies);

// for (const property in person.hobbies) {
//   console.log(person.hobbies[property]);
// }

// let OuterObj = {};
// const firstKey = "key01";
// const secondKey = "key02";
// const nestedFirstKey = "nestedKey01";
// const nestedSecondKey = "nestedKey02";

// OuterObj[firstKey] = "First Key Value";
// OuterObj[secondKey] = {};
// OuterObj[secondKey][nestedFirstKey] = "first Nested value";
// OuterObj[secondKey][nestedSecondKey] = "Second Nested value";

// console.log(OuterObj);

// const fruits = [
//   { name: "apple", color: "red", colories: 92 },
//   { name: "orange", color: "orange", colories: 45 },
//   { name: "banana", color: "yellow", colories: 104 },
//   { name: "coconut", color: "white", colories: 129 },
//   { name: "pineapple", color: "yellow", colories: 37 },
// ];

// // console.log(fruits[0].name);
// fruits.push({ name: "grapes", color: "purple", calories: 63 });
// // console.log(fruits);
// // fruits.pop();
// // fruits.shift();
// // console.log(fruits);
// // fruits.forEach((fruit) => console.log(fruit.name));

// const maxfruit = fruits.reduce((max, fruit) =>
//   fruit.colories > max.colories ? fruit : max
// ).name;
// console.log(maxfruit);

// console.log(fruits);

// let OuterObj = {};
// const first = "key1";
// const second = "key2";
// const nestedFirstKey = "nestedKey1";
// const nestedSecondKey = "nestedKey2";

// OuterObj[first] = "first Key";
// OuterObj[second] = {};
// OuterObj[second][nestedFirstKey] = "nested first key";
// OuterObj[second][nestedSecondKey] = "nested second key";

// console.log(OuterObj);

class Person {
  constructor(name, age, ...addres) {
    this.name = name;
    this.age = age;
    this.addres = new Addres(...addres);
  }
}
class Addres {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}
const person1 = new Person(
  "kiran",
  23,
  "kadhiri vari palli",
  "andhrapradesh",
  "india"
);
const person2 = new Person("vamsi", 25, "proddaturu", "andhrapradesh", "india");
const person3 = new Person(
  "suman",
  26,
  "narsimhapuram",
  "andhrapradesh",
  "india"
);

console.log(person1.addres.street);
