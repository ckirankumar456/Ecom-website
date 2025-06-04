// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "kiran", age: 25 });
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
// function fetchComment() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["Comment 1", "Comment 2", "Comment 3"]);
//     }, 3000);
//   });
// }

// Promise.all([fetchUser(), fetchPosts(), fetchComment()])
//   .then((result) => {
//     const [user, posts, comment] = result;
//     console.log("User ", user);
//     console.log("Posts ", posts);
//     console.log("Comment ", comment);
//   })
//   .catch((error) => {
//     console.log("Error fetching data", error);
//   });

// let p1 = new Promise(function (resolve, reject) {
//   resolve("promise is fulfield");
// });
// p1.then((value) => {
//   console.log(value);
// });

let p1 = Promise.reject("Error Occurred");
p1.catch((error) => {
  console.log(error);
});
