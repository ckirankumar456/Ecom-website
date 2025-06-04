/*function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you walk the dog");
    }, 2000);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you clean the kitchen");
    }, 500);
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
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    setTimeout(() => {
      console.log("you Have Complete All");
    }, 3000);
  });*/

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("you walk the dog");
      } else {
        reject("you did not walk the dog");
      }
    }, 2000);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleaned = false;
      if (cleaned) {
        resolve("you clean the kitchen");
      } else {
        reject("you did not clean the kitchen");
      }
    }, 500);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const takeTrashed = true;
      if (takeTrashed) {
        resolve("you take out the trash");
      } else {
        reject("you did not take out the trash");
      }
    }, 3000);
  });
}
walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    setTimeout(() => {
      console.log("you have complete all the tasks");
    }, 3000);
  })
  .catch((error) => console.error(error));
