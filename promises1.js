// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("you walk the dog");
//     }, 1500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("you clean the kitchen");
//     }, 3000);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("you take the trash");
//     }, 1000);
//   });
// }

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("you finished all the chores");
//   });

// let promise = new Promise(function (resolve, reject) {
//   let success = true;
//   if (success) {
//     resolve("operation successed");
//   } else {
//     reject("operation failed");
//   }
// });
// promise
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// let promise = new Promise(function (resolve, reject) {
//   resolve("promise fulfilled");
// });
// promise.then(function (value) {
//   console.log(value);
// });

// let promise = new Promise(function (resolve, reject) {
//   resolve(10);
// });
// promise
//   .then(function (value) {
//     console.log(value);
//     return value * 2;
//   })
//   .then(function (value) {
//     console.log(value);
//     return value + 5;
//   })
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "alice", age: 24 });
//     }, 2000);
//   });
// }

// function fetchPosts() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["post 1", "post 2", "post 3"]);
//     }, 1000);
//   });
// }

// function fetchComments() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["comment 1", "comment 2", "comment 3"]);
//     }, 3000);
//   });
// }

// Promise.all([fetchUser(), fetchPosts(), fetchComments()])
//   .then((result) => {
//     const [user, posts, comment] = result;
//     console.log("User :", user);
//     console.log("Posts :", posts);
//     console.log("Comments :", comment);
//   })
//   .catch((error) => {
//     console.log("error fetching data: ", error);
//   });

// function fetchFastData() {
//   return new Promise((reject) => {
//     setTimeout(() => {
//       reject("fast data retrieved");
//     }, 1000);
//   });
// }
// function fetchSlowData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("slow data retrived");
//     }, 3000);
//   });
// }
// function fetchErrorData() {
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject("Error fetching data");
//     }, 2000);
//   });
// }

// Promise.race([fetchFastData(), fetchSlowData(), fetchErrorData()])
//   .then((result) => {
//     console.log("race resolved: ", result);
//   })
//   .catch((error) => {
//     console.error("error rejected : ", error);
//   });

// let p = Promise.resolve(42);
// p.then((value) => {
//   console.log(value);
// });

// let p = Promise.reject("error occurred");
// p.catch((error) => console.log(error));

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("data received");
//     }, 2000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data received");
    }, 2000);
  });
}
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("Error :", error);
  }
}
getData();
