// const numbers = [1, 2, 3, 4, 5];
// const [first, , third] = numbers;
// console.log(first);
// console.log(third);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [first, , third, , , d] = numbers;

// console.log(first);
// console.log(third);
// console.log(d);

// const person = { name: "kiran", age: 23, country: "india" };
// const { name, age } = person;
// console.log(name);
// console.log(age);

// const person = { name: "kiran", age: 23 };
// const { name: fullname, age: year } = person;
// console.log(fullname);
// console.log(year);

// const user = {
//   id: 101,
//   profile: {
//     userName: "kirankumar",
//     email: "naveen@example.com",
//   },
// };
// const {
//   profile: { userName, email },
// } = user;
// console.log(userName);
// console.log(email);

// const studentDetails = {
//   name: "kiran",
//   age: 23,
//   branch: "mba",
//   markes: 67,
//   addres: {
//     country: "india",
//     city: "andhra pradesh",
//     mondal: "yerraguntla",
//   },
// };
// const {
//   addres: { country, city, mondal },
// } = studentDetails;
// console.log(studentDetails.addres.country);

// function displayUser({ name, age }) {
//   console.log(`name: ${name}, age: ${age}`);
// }
// const user = { name: "sanjay", age: 23 };
// displayUser(user);

// function displayStudent({ name, age, markes }) {
// console.log(`name : ${name}, age : ${age}, markes : ${markes}`);
// }
// const student = { name: "kiran", age: 23, markes: 67 };
// displayStudent(student);

// let a = 1;
// let b = 2;
// [a, b] = [b, a]; //    [1,2]=[2,1]
// console.log(a);
// console.log(b);

// const colors = ["red", "white", "black", "green", "blue", "gray"];
// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);

// const colors = ["red", "white", "black", "green", "blue", "gray"];
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// const person1 = {
//   firstName: "kiran",
//   lastName: "kumar",
//   age: 23,
//   job: "programmer",
// };
// const person2 = {
//   firstName: "prtrik",
//   lastName: "star",
//   age: 34,
// };
// const { firstName, lastName, age, job = "unemployee" } = person1;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// function displayPerson({ firstName, lastName, age, job }) {
//   console.log(`first name: ${firstName}, last name : ${lastName}`);
// }
// const person = {
//   firstName: "kiran",
//   lastName: "kumar",
//   age: 22,
//   job: false,
// };
// console.log(displayPerson(person));

// const a = [10, 20, 30, 40, 50];
// const [w, x, y, z] = a;
// console.log(w);
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(" ");
// const [b, c, d, , e] = a;
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let [fst, , ...last] = ["a", "b", "c", "d"];

// console.log(fst);
// console.log(last);

// function NamesList() {
//   return ["a", "b", "c", "d"];
// }
// let [fst, snd] = NamesList();
// console.log(fst);
// console.log(snd);

// let marks = { x: 27, y: -34, z: 47 };
// const { x, y, z } = marks;
// console.log(x);
// console.log(y);
// console.log(z);

// ({ x, y } = { x: 10, y: 20 });
// console.log(x);
// console.log(y);

// ({ x, y, ...restOf } = { x: 10, y: 20, m: 30, n: 40 });
// console.log(x);
// console.log(y);
// console.log(restOf);

// function simpleDisplay() {
//   return ["a", "b", "c", "d"];
// }
// let [first, ...remain] = simpleDisplay();
// console.log(first);
// console.log(...remain);

// let markes = { x: 45, y: 67, z: 78 };
// const { x, y, z } = markes;
// console.log(x);
// console.log(y);
// console.log(z);

// ({ x, y } = { x: 56, y: 67 });
// console.log(x);
// console.log(y);

// ({ x, y, ...restOf } = { x: 56, y: 67, z: 78, a: 45, b: 68, c: 75 });
// console.log(x);
// console.log(y);
// console.log(restOf);

// function display() {
//   return ["a", "b", "c"];
// }
// let [first, ...remain] = display();
// console.log(first);
// console.log(remain);

// const colors = ["red", "green", "blue", "black", "white"];
// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);

// const colors = ["red", "green", "blue", "black", "white"];
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// const person1 = {
//   firstName: "kiran",
//   lastName: "kumar",
//   age: 23,
//   job: "programmer",
// };
// const person2 = {
//   firstName: "suman",
//   lastName: "vamsi",
//   age: 25,
// };
// const { firstName, lastName, age, job = "unemployee" } = person1;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// function displayPerson({ firstName, lastName, age, job }) {
//   console.log(`name: ${firstName},${lastName}${age}`);
// }
// displayPerson(person1);
