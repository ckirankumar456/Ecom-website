function modifyValue(x) {
  x = x + 10;
  console.log("Insude function", x);
}
let num = 5;
modifyValue(num);
console.log(`outside function ${num}`);
