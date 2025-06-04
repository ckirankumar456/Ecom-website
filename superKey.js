class Animal {
  constructor(name, age) {
    this.name = name;
    this.name = age;
  }
}
class Rabbit extends Animal{
    super(name,age)
    constructor(runSpeed){
        this.runSpeed=runSpeed;
    }
}
class Fish extends Animal{
    super(name,age)
    constructor(swimSpeed){
        this.swimSpeed=swimSpeed;
    }
}
class Fly extends Animal{
    super(name,age)
    constructor(flySpeed){
        this.flySpeed=flySpeed;
    }
}
class Hawk extends Animal{
    super(name,age)
    constructor(hawkSpeed) {
        this.hawkSpeed=hawkSpeed;
    }
}
const rabbit=new Rabbit("Rabbit",1,25);
const fish=new Fish("Fish",2,12);
const fly=new Fly("Fly",3,50);
const hawk=new Hawk("Hawk",4,30);

console.log(hawk.name);
console.log(rabbit.runSpeed);
console.log(fish.age);