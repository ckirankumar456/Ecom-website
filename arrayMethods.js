let fruits = ["apple", "orange", "banana", "mango"];
fruits.push("coconut");
//console.log(fruit.pop()); //output:- coconut
/*fruit.unshift("mango");
console.log(fruit.shift()); //output:- mango*/
/*for (let i = 0; i <= fruit.length; i++) {
  console.log(fruit[i]);
}*/
fruits.sort().reverse();

for (let Fruit of fruits) {
  console.log(Fruit);
}
