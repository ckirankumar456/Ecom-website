function car(make, model, year, color) {
  this.make = make;
  this.car = model;
  this.model = model;
  this.year = year;
  this.drive = function () {
    console.log("you drive the " + car1.model);
  };
}
const car1 = new car("ford", "maruti", "2022", "red");
console.log(car1.make);
console.log(car1.year);
car1.drive();
