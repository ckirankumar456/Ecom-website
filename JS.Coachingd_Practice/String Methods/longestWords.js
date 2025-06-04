let str = "java Script is so hard to learn";
let word = str.split(" ");
let longestWord = " ";
for (let element of word) {
  if (element.length > longestWord.length) {
    longestWord = element;
  }
}
console.log(longestWord);
