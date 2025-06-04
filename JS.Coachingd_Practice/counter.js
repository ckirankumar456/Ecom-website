const countable = document.getElementById("countable");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resentBtn = document.getElementById("resentBtn");

increaseBtn.onclick = function () {
  count++;
  countable.textContent = count;
};
decreaseBtn.onclick = function () {
  count--;
  countable.textContent = count;
};
resentBtn.onclick = function () {
  count = 0;
  countable.textContent = count;
};
