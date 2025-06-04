/*function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you walk the Dog");
    }, 1500);
  });
}
function cleanKichen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you clean the kitchen");
    }, 2500);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you take out the trash");
    }, 500);
  });
}
walkDog()
  .then((value) => {
    console.log(value);
    return cleanKichen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("you finished all the chorest");
  });
*/

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you walk the dog");
    }, 1000);
  });
}
function cleanKichen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you clean the kitchen");
    }, 2000);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you take out the trash");
    }, 3000);
  });
}
walkDog()
  .then((value) => {
    console.log(value);
    return cleanKichen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("All the complete");
  });
