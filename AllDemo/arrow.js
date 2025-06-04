const person1 = {
  firstName: "kiran",
  lastName: "kumar",
  age: 22,
  sayHello: function () {
    console.log("hi ! i am " + this.firstName, this.lastName);
  },
  eat: function () {
    console.log("i am eating chiken");
  },
};
const person2 = {
  firstName: "pavan",
  lastName: "kumar",
  age: 27,
  sayHello: () => console.log("hi ! i am pavan kumar"),
  eat: () => console.log("i am eating biriyani"),
};
person1.sayHello();
//person2.sayHello();
