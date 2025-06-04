let str = "kiran kumar123@gmail";
let ca, cd, spch;
ca = cd = spch = 0;
for (let ch of str) {
  if (ch.match(/[a-zA-Z]/g)) {
    ca++;
  } else if (ch.match(/[0-9]/g)) {
    cd++;
  } else {
    spch++;
  }
}
console.log("no of alphabets ", ca);
console.log("no of digit ", cd);
console.log("no of spacial characters ", spch);
