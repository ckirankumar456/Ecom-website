let str = "anatapur";
let ans = " ";
for (let ch of str) {
  if (!ans.includes(ch)) {
    ans = ans + ch;
  }
}
console.log(ans);
