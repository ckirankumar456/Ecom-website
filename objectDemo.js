// const person1 = {
//   firstName: "kiran",
//   lastName: "kumar",
//   age: 23,
//   isStudent: true,
//   isEmployee: false,
// };
// const person2 = {
//   firstName: "suman",
//   lastName: "sake",
//   age: 21,
//   isStudent: false,
//   isEmployee: true,
// };
// const person3 = {
//   firstName: "vasmi",
//   lastName: "venkat",
//   age: 25,
//   isStudent: true,
//   isEmployee: true,
// };
// const persons = [person1, person2, person3];
// persons.forEach((person) => {
//   Object.keys(person).forEach((key) => {
//     console.log(`${key}: ${person[key]}`);
//   });
//   console.log(" ");
// });

const person = {
  firstName: "kiran",
  lastName: "kumar",
  age: 23,
  isStudent: false,
  sayHello: function () {
    console.log("i am kiran kumar");
  },
  eat: function () {
    console.log("i am eating something");
  },
  eating: () => console.log("i am eating chicken"),
  sayHellow: (name) => {
    console.log("well com " + name);
  },
};
person.eat();
person.sayHellow("kiran");
