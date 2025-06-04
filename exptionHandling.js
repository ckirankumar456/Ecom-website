// let str="this is a sample heading';
// console.log(str);
// const l = 4;
// const b = 4.6;
// let area = 2 * (l + b);
// console.log(area);
// try {
//   let x = 10 / 0;
// }
// catch (error) {
// console.log("an error occured: ", error.message);
// }
// try {
//   console.log(x);
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log("this is always excuted");
// }
// console.log("you have reacthed the end");
// try {
//   const dividend = window.prompt("enter a dividend: ");
//   const divisor = window.prompt("enter a divisor: ");
//   const result = dividend / divisor;
//   console.log(result);
// } catch (error) {
//   console.error(error);
// // }
// // console.log("you have reached the end!");
// try {
//   let x = 10 / 0;
//   console.log(x);
// } catch (error) {
//   console.log("an error occured: ", error.message);
// }
// try {
//   let json = '{"age: 30"}';
//   let user = JSON.parse(json);
//   if (!user.name) {
//     throw new Error("incomplete data : no name");
//   }
// } catch (error) {
//   console.log("Error: ", error.message);
// }
// im = 300;
// try {
//   if (im < 0 || im > 30) {
//     throw new Error("Invalid Internal Markes");
//   }
//   console.log(error.message);
// } catch (err) {
//   console.log(err.message);
// } finally {
//   console.log("program Ended");
// }
// try {
//   console.log("start try block");
//   throw new Error("Something went wrong");
// } catch (error) {
//   console.log("caugh an error: ", error.message);
// } finally {
//   console.log("finally block executes no matter what");
// }
// try {
//   try {
//     throw new Error("Inner error");
//   } catch (error) {
//     console.log("caught inner error: ", error.message);
//   }
// } catch (error) {
//   console.log("caugth outer error: ", error.message);
// }
// function dividend(a, b) {
//   if (b === 0) {
//     throw { message: "divison by zero", code: 400 };
//   }
//   return a / b;
// }
// try {
//   dividend(5, 0);
// } catch (error) {
//   console.log("error code : ", error.code, "_", error.message);
// }
// try {
//   try {
//     JSON.parse("invalid JSON");
//   } catch (error) {
//     console.log("caugth parsing error ", error.message);
//     throw error;
//   }
// } catch (error) {
//   console.log("re-throw error: ", error.message);
// }
