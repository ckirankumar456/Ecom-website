class Person {
  constructor(name, age, isStudent, ...addres) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
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
  22,
  false,
  "prakash nagar",
  "Yerragutla",
  "india"
);
const person2 = new Person(
  "suman",
  21,
  true,
  "prakash nagar",
  "proddatur",
  "india"
);
const person3 = new Person(
  "vamsi",
  25,
  false,
  "prakash nagar",
  "proddatur",
  "india"
);
console.log(person1.addres.city);
