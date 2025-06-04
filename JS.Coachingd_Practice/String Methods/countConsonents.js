let str = "kirankumar@123";
let count = 0;
let exp = /[a-zA-Z]/g;
for (let ch of str) {
  if (ch.match(exp)) {
    if (!"aeiouAEIOU".includes(ch)) {
      count++;
    }
  }
}
console.log(count);
