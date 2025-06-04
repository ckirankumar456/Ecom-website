let str = "Madam".toLowerCase();
let rev = " ";
for (let ch of str) {
  rev = ch + rev;
}
console.log(rev);
if (str === rev) {
  console.log("String palidrom");
} else {
  console.log("not a string palidrom");
}
