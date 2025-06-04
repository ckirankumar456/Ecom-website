let str = "java is so hard to learn";
let word = " ";
let count = 0;
for (let ch of str) {
  if ("aeiouAEIOU".includes(ch)) {
    count++;
  }
}
console.log(count);
