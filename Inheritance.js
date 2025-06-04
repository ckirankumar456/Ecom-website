// function car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.drive = function () {
//     console.log(`you drive the ${this.model}`);
//   };
// }
// const car1 = new car("ford", "maruti", 2024, "red");
// console.log(car1.make);
// console.log(car1.color);
// console.log(car1.year);
// car1.drive();

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   displayProduct() {
//     console.log(`product: ${this.name}`);
//     console.log(`price: ${this.price}`);
//   }
// }
// const product1 = new Product("kiran", 19.99);
// product1.displayProduct();

// class MathUtil {
//   static PI = 3.143159;
//   static getDiameter(radius) {
//     return radius * 2;
//   }
//   static getCircumference(redius) {
//     return 2 * this.PI * redius;
//   }
// }
// console.log(MathUtil.getCircumference(10));

// class User {
//   static userCount = 0;
//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }
// }
// const user1 = new User("kiran");
// // const user2 = new User("kumar");
// // const user3 = new User();          user Count increase

// console.log(user1.username);
// console.log(User.userCount);

// class Animal {
//   alive = true;
//   eat() {
//     console.log(`this ${this.name} is eating `);
//   }
//   sleep() {
//     console.log(`this ${this.name} is sleeping`);
//   }
// }
// class Rabbit extends Animal {
//   name = "rabbit";
// }
// class Fish extends Animal {
//   name = "fish";
// }
// class Hawk extends Animal {
//   name = "hawk";
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();

// const Person1 = {
//   name: "kiran kumar",
//   age: 22,
//   sayHello: function () {
//     console.log(`hi i am ${this.name}`);
//   },
// };
// Person1.sayHello();

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
// }
// class Hawk extends Animal {
//   constructor(name, age, flyspeed) {
//     super(name, age);
//     this.flyspeed = flyspeed;
//   }
// }
// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 12);
// const hawk = new Hawk("hawk", 3, 50);

// // console.log("name : " + hawk.name);
// // console.log("age : " + rabbit.age);
// // console.log("speed : " + fish.swimSpeed);

// console.log("name : " + fish.name);
// console.log("age : " + fish.age);
// console.log("speed : " + fish.swimSpeed);

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
  30,
  "124 conch st",
  "Bikini bottom",
  "Int wanter"
);
const person2 = new Person(
  "suman",
  34,
  "124 conch st",
  "Bikini bottom",
  "Int wanter"
);
const person3 = new Person(
  "vamsi",
  35,
  "124 conch st",
  "Bikini bottom",
  "Int wanter"
);
console.log(person1.addres.street);
