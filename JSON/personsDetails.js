/*const names = ["kiran", "pavan", "vamsi", "suman"];
const jsonString = JSON.stringify(names);
 console.log(names); // OR
 console.log(jsonString);*/

/*const person = {
  name: "babji",
  age: 24,
  isEmployed: true,
  hobbies: ["cricket", "cooking", "reading"],
};
const jsonString = JSON.stringify(person);
console.log(person); // OR
console.log(jsonString);*/

/*const peoples = [
  {
    name: "kiran",
    age: 22,
    isEmployed: false,
  },
  {
    name: "pavan",
    age: 26,
    isEmployed: true,
  },
  {
    name: "vamsi",
    age: 23,
    isEmployed: true,
  },
  {
    name: "suman",
    age: 22,
    isEmployed: false,
  },
];
const jsonString = JSON.stringify(peoples);
// console.log(peoples); // OR
// console.log(jsonString);*/

//                                     JSON parse ()

/*const jsonNames = ["kiran", "pavan", "vamsi", "suman"];
const jsonPersons = {
  name: "babji",
  age: 24,
  isEmployed: true,
  hobbies: ["cricket", "cooking", "reading"],
};

const jsonPeoples = [
  { name: "kiran", age: 22, isEmployed: false },
  { name: "pavan", age: 26, isEmployed: true },
  { name: "vamsi", age: 23, isEmployed: true },
  { name: "suman", age: 22, isEmployed: false },
];
const persedData = JSON.parse(jsonPeoples);
console.log(persedData);*/

/*fetch("names.json")
  .then((response) => response.json())
  .then((value) => console.log(value));*/

/*fetch("people.json")
  .then((response) => response.json())
  .then((value) => console.log(value));*/

/*fetch("persons.json")
  .then((response) => response.json())
  .then((value) => console.log(value));*/

fetch("people.json")
  .then((response) => response.json())
  .then((value) => value.forEach((value) => console.log(value.isEmployed)))
  .catch((error) => console.error(error));
