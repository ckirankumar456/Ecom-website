const arr = [34, 54, 4, 7, -4, 67, 4, 6, 8, 6];
for (index in arr) {
  console.log("for in : " + arr[index]);
}
console.log("------------");
const arr1 = [34, 54, 4, 7, -4, 67, 4, 6, 8, 6];
for (let element of arr1) {
  if (element % 2 != 0) {
    console.log("for of : " + element);
  }
}
// const fitBitData = {
//   totalSteps: 3045544,
//   totalMiles: 243.34,
//   avgCalorieBurn: 4456454,
//   workoutsThisweek: "5 of 7",
//   avgGoodSleep: "2:13",
// };
// for (let key in fitBitData) {
//   console.log(key + " : " + fitBitData[key]);
// }
