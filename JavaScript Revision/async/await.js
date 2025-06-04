async function hello() {
  setTimeout(() => {
    console.log("task for wait");
  }, 5000);
  return await "Hello";
}
hello().then((data) => {
  console.log(data);
});
