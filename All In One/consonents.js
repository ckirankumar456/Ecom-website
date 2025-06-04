// str = "james@bond2";
// let count = 0;
// let exp = /[a-zA-Z]/g;
// for (let ch of str) {
//   if (ch.match(exp)) {
//     if (!"aeiouAEIOU".includes(ch)) {
//       count++;
//     }
//   }
// }
// console.log(count);

// let s = "madam".toLowerCase();
// let rev = " ";
// for (let ch of s) {
//   rev = ch + rev;
// }
// console.log(rev);
// if (s === rev) {
//   console.log("String palindrom");
// } else {
//   console.log("String palindrome");
// }

// let str = "james bond@007";
// let ca, cd, spch;
// ca = cd = spch = 0;

// for (let ch of str) {
//   if (ch.match(/[a-zA-Z]/g)) {
//     ca++;
//   } else if (ch.match(/[0-9]/g)) {
//     cd++;
//   } else {
//     spch++;
//   }
// }
// console.log(ca);
// console.log(cd);
// console.log(spch);

// let str = "java is so hard to learn";
// words = str.split(" ");
// longestword = " ";

// for (let ele of words) {
//   if (ele.length > longestword.length) {
//     longestword = ele;
//   }
// }
// console.log(longestword);

// str = "anatapur";
// let ans = " ";
// for (let ch of str) {
//   if (!ans.includes(ch)) {
//     ans = ans + ch;
//   }
// }
// console.log(ans);
