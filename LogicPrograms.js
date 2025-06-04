//                   Odd and Even nums

/* let value = 20;
for (let i = 1; i <= value; i++) {
  if (i % 2 == 0) {
    console.log(`even nums: ${i}`);
  }
  if (i % 2 == 1) {
    console.log(`odd nums ${i}`);
  }
} */

//                 Sum of Odd nums

/* let value = 10;
let sum = 0;
let count = 0;
for (let i = 1; i <= value; i++) {
  if (i % 2 == 1) {
    sum += i;
    count++;
  }
}
console.log(`sum of odd nums: ${sum}`);
console.log(`how many odd numbers in ${value} = ${count}`); */

//                     Armstrong number

/* let num = 153;
let sum = 0;
let r = 0;
let temp = num;
while (num > 0) {
  r = num % 10;
  sum = sum + r * r * r;
  num = Math.floor(num / 10);
}
if (temp == sum) {
  console.log("this is armstrong");
} else {
  console.log("this is not armstrong");
} */

//                 Reverse a String

/* let str = "javascript is so hard to learn";
let rev = " ";
for (let ch of str) {
  rev = ch + rev;
}
console.log(rev); */

//                Armstrong numbers between 1 to 1000

/* let num = 1000;
let sum = 0;
let temp = num;
let rem = 0;
for (let i = 1; i <= num; i++) {
  while (i > 0) {
    rem = i % 10;
    sum += rem * rem * rem;
    i = Math.floor(i / 10);                Not completed
  }
  if (temp === i) {
    console.log(`${i} this is number`);
  } else {
    console.log(`${i} this is not number`);
  }
} */
