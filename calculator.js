// we are getting from html by id
const display = document.getElementById("display");
function toDisplay(input) {
  display.value += input;
}
function calculate() {
  display.value = eval(display.value);
}
function clearDisplay() {
  display.value = " ";
}
