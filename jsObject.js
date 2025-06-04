const person = {
  firstname: "kiran",
  lastname: "kumar",
  age: 22,
  employee: true,
  sayHello: function () {
    console.log("i am kiran kumar");
  },
  eat: function () {
    console.log("i am eating somthing ");
  },
  eat: () => console.log("i am eating chicken"),
};
console.log(person.sayHello());
console.log(person.age);
