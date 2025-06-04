// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   wish() {
//     console.log(`hello ${this.name} ... happy birth day`);
//   }
// }
// let obj = new User("suman");
// obj.wish();
// console.log(obj.name);

// class Student {
//   constructor(id, name, branch) {
//     this.id = id;
//     this.name = name;
//     this.branch = branch;
//   }
//   details() {
//     console.log(`my name is ${this.name}`);
//     console.log(`i belong to ${this.branch} branch`);
//   }
// }
// s1 = new Student(105, "suman", "mca");
// s1.details();

// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }
//   displayInfo() {
//     console.log(`Car: ${this.brand}, ${this.model}, year: ${this.year}`);
//   }
// }
// const myCar = new Car("toyato", "Corolla", 2022);
// myCar.displayInfo();

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
//   getPerimeter() {
//     return 2 * (this.width + this.height);
//   }
// }
// const myRectangle = new Rectangle(7, 8);
// console.log("area : ", myRectangle.getArea());
// console.log("perimeter : ", myRectangle.getPerimeter());

// function makeClass(phrase) {
//   return class {
//     sayHi() {
//       console.log(phrase);
//     }
//   };
// }
// let User = makeClass("hello");
// new User().sayHi();

// class Button {
//   constructor(value) {
//     this.value = value;
//   }
//   click = () => {
//     console.log(this.value);
//   };
// }
// let button = new Button("hello");
// setTimeout(button.click, 1000);

// class Father {
//   fatherProperty() {
//     console.log("father's property");
//   }
// }
// class Son extends Father {
//   sonproperty() {
//     console.log("son property");
//   }
// }

// obj = new Son();
// obj.fatherProperty();
// obj.sonproperty();

// class Father {
//   constructor() {
//     this.property = 800000.0;
//   }
//   displayProperty() {
//     console.log("father's property= ", this.property);
//   }
// }
// class Son extends Father {

//}
// const s = new Son();
// s.displayProperty();

// class Father {
//   constructor() {
//     this.property = 800000.0;
//   }
//   displayProperty() {
//     console.log("father's property= ", this.property);
//   }
// }
// class Son extends Father {
//   constructor() {
//     super();
//     this.property = 200000.0;
//   }
//   displayProperty() {
//     console.log("child's property = ", this.property);
//   }
// }
// const obj = new Son();
// obj.displayProperty();

// class Father {
//   constructor(property = 0) {
//     this.property = property;
//   }
//   displayProperty() {
//     console.log("father's property = ", this.property);
//   }
// }
// class Son extends Father {
//   constructor(property1 = 0, property = 0) {
//     super(property);
//     this.property1 = property1;
//   }
//   displayProperty() {
//     console.log("total property of child = ", this.property + this.property1);
//   }
// }
// const s = new Son(200000.0, 800000.0);
// s.displayProperty();

// class Square {
//   constructor(x) {
//     this.x = x;
//   }
//   area() {
//     console.log("area of square: ", this.x * this.x);
//   }
// }
// class Rectangle extends Square {
//   constructor(x, y) {
//     super(x);
//     this.y = y;
//   }
//   area() {
//     super.area();
//     console.log("area of rectagle: ", this.x * this.y);
//   }
// }
// const [a, b] = [2, 3];
// const r = new Rectangle(a, b);
// r.area();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     return `${this.name} makes a sound`;
//   }
// }
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
//   speak() {
//     return `${this.name}, the ${this.breed}, brank`;
//   }
// }
// const myDog = new Dog("buddy", "golden Retriever");
// console.log(myDog.speak());

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
// }
// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }
// }
// let rabbit = new Rabbit("white Rabbit", 10);
// console.log(rabbit.name);
// console.log(rabbit.earLength);

// const person = {
//   greet() {
//     console.log("hello");
//   },
// };

// const john = Object.create(person);
// john.greet();

const canEat = {
  eat() {
    console.log("eating...");
  },
};
const canWalk = {
  walk() {
    console.log("walking...");
  },
};
class Person {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(Person.prototype, canEat, canWalk);
const john = new Person("john");
john.eat();
john.walk();
