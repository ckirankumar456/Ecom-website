const mybutton = document.getElementById("mybutton");
const random = document.getElementById("random");
const min = 1;
const max = 6;
mybutton.onclick = function () {
  let randomNum = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNum);
  random.textContent = randomNum;
};
