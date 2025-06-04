// const person = new Object();
// person.name = "hari";
// person.age = 30;
// person.places = "Anantapur";
// console.log(person);
// console.log(person.age);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const person1 = new Person("kiran", 23);
// console.log(person1);

// const prototypeObj = {
//   greet: function () {
//     console.log("hello!");
//   },
// };
// const obj = Object.create(prototypeObj);
// // const obj = new sayHello(prototypeObj);
// obj.greet();
// prototypeObj.greet();

// const car = {
//   make: "toyata",
//   model: "camry",
//   year: 2022,
// };
// console.log(car);
// console.log(car.model);
// console.log(car["year"]);

// const car = {
//   make: "toyata",
//   model: "camry",
//   year: 2022,
// };

// console.log(car);
// car.color = "red";
// console.log(car);
// car.year = 2025;
// console.log(car);
// delete car.year;
// console.log(car);

// const person = {
//   name: "kiran",
//   greet: function () {
//     console.log(`hello, ${this.name} !`);
//   },
// };
// // const nm = Object.create(person);
// // nm.greet();

// person.greet();

// const car = {
//   make: "toyata",
//   model: "camry",
//   year: 2022,
// };

// for (let key in car) {
//   console.log(key + ": " + car[key]);
// }
// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

const car = {
  make: "toyata",
  model: "camry",
  year: 2022,
};

const target = {};
Object.assign(target, car);
console.log(target);

Object.seal(car);
car.color = "red";
car.year = 2025;
delete car.model;
car.make = "maruti";
console.log(car);

Object.freeze(car);
delete car.model;
color = "blue";
car.year = 2026;
console.log(car);
