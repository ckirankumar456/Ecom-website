// let randomNum = Math.random();
// console.log(randomNum);

// let randomNum = Math.floor(Math.random() * 100 - 1) + 1;
// console.log(randomNum);

// const min = 1;
// const max = 6;
// let randomNum = Math.floor(Math.random() * max) + min;
// console.log(randomNum);

let min = 1;
let max = 6;
document.getElementById("mybtn").onclick = function () {
  let randomNum = Math.floor(Math.random() * max) + min;
  document.getElementById("myh1").textContent = randomNum;
  if (1 == randomNum) {
    document.getElementById("myh2").textContent = "⚀";
  } else if (2 == randomNum) {
    document.getElementById("myh2").textContent = "⚁";
  } else if (3 == randomNum) {
    document.getElementById("myh2").textContent = "⚂";
  } else if (4 == randomNum) {
    document.getElementById("myh2").textContent = "⚃";
  } else if (5 == randomNum) {
    document.getElementById("myh2").textContent = "⚄";
  } else if (6 == randomNum) {
    document.getElementById("myh2").textContent = "⚅";
  }
};
