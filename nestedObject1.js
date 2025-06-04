// class Person {
//   constructor(name, age, ...address) {
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }
// class Address {
//   constructor(street, city, country) {
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }
// const person1 = new Person(
//   "kiran",
//   22,
//   "yerraguntla",
//   "India",
//   "andhraPradesh"
// );
// const person2 = new Person("suman", 23, "proddatur", "India", "andhraPradesh");
// const person3 = new Person("vamsi", 25, "mydhakur", "India", "andhraPradesh");
// console.log(person1.address.street);

const fruits = [
  { name: "apple", color: "red", colories: 96 },
  { name: "orange", color: "orange", colories: 45 },
  { name: "banana", color: "yellow", colories: 105 },
  { name: "coconut", color: "white", colories: 150 },
  { name: "pineapple", color: "yellow", colories: 37 },
];

console.log(fruits[0].name);
fruits.push({ name: "grapes", color: "purple", colories: 67 });
// console.log(fruits);
fruits.pop();
// console.log(fruits);
// fruits.forEach((fruit) => console.log(fruit));

const nameFruits = fruits.map((fruit) => fruit.name);
console.log(nameFruits);
