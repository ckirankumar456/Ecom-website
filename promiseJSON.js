// let promise = new Promise(function (resolve, reject) {
//   let success = true;
//   if (success) {
//     resolve("Operation succeeded");
//   } else {
//     reject("Operation failed");
//   }
// });

// let promise = new Promise(function (resolve, reject) {
//   resolve("Promise fulfilled");
// });

// promise.then(function (value) {
//   console.log(value);
// });

// let promise = new Promise(function (resolve, reject) {
//   reject("Promise Rejected");
// });

// promise.catch(function (value) {
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
//   });

// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "alice", age: 25 });
//     }, 2000);
//   });
// }

// function fetchPosts() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["Post 1", "Post 2", "Post 3"]);
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
//     console.log("user ", user);
//     console.log("posts ", posts);
//     console.log("comment ", comment);
//   })
//   .catch((error) => {
//     console.error("error fetcting data : ", error);
//   });

// function fetchUser() {
//   return new Promise((reject) => {
//     setTimeout(() => {
//       reject("fast data retrieved");
//     }, 1000);
//   });
// }
// function fetchPosts() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("slow data retrieved");
//     }, 3000);
//   });
// }
// function fetchComments() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("error fetching data");
//     }, 2000);
//   });
// }

// Promise.race([fetchUser(), fetchPosts(), fetchComments()])
//   .then((result) => {
//     console.log("race resolved", result);
//   })
//   .catch((error) => {
//     console.error("race rejected", error);
//   });

// let p = Promise.resolve(42);
// p.then((value) => {
//   console.log(value);
// });

// let p = Promise.reject("error occured");
// p.catch((error) => {
//   console.log(error);
// });
