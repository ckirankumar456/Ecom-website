function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walked = true;
      if (walked) {
        resolve("you walk the dog");
      } else {
        reject("you did not walked the dog");
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
    }, 3000);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashed = true;
      if (trashed) {
        resolve("you take out the trash");
      } else {
        reject("you did not take out the trash");
      }
    }, 3000);
  });
}
async function dochores() {
  const walkDogResult = await walkDog();
  console.log(walkDogResult);
  const cleanKitchenResult = await cleanKitchen();
  console.log(cleanKitchenResult);
  const takeOutTrashResult = await takeOutTrash();
  console.log(takeOutTrashResult);
  setTimeout(() => {
    console.log("you finished all the chores");
  }, 2000);
}
dochores();

/*function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walked = true;
      if (walked) {
        resolve("you walk the dog");
      } else {
        reject("you did not walk the dog");
      }
    }, 3000);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleaned = false;
      if (cleaned) {
        resolve("you clean the Kitchen");
      } else {
        reject("you did not clean the kitchen");
      }
    }, 500);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashed = true;
      if (trashed) {
        resolve("you take out the trashe");
      } else {
        reject("you did not take out the trashe");
      }
    }, 2000);
  });
}
async function dochores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
  } catch (error) {
    console.error(error);
  }
}
dochores();
*/
