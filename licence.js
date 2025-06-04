const input = document.getElementById("input");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
let age;
submit.onclick = function () {
  age = input.value;
  age = Number(age);
  if (18 < age) {
    result.textContent = "you can apply";
  } else {
    result.textContent = "you must be 18+ then you can apply";
  }
};
