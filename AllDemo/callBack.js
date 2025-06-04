/*sum(displayConsole, 2, 3);
function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}
function displayConsole(result) {
  console.log(result);
}*/

function hello() {
  console.log("hello");
}
function goodbye() {
  console.log("goodbye");
}
wait(leave);
function wait(callback) {
  console.log("wait");
  callback();
}
function leave() {
  console.log("leave");
}
