const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countable = document.getElementById("countable");
decrease.onclick = function () {
  count--;
  countable.textContent = count;
};
reset.onclick = function () {
  count = 0;
  countable.textContent = count;
};
increase.onclick = function () {
  count++;
  countable.textContent = count;
};
