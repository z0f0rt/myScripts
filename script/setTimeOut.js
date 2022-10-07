"use srict";

let arr = [8, 47, -2, 1];

// =========================================================================================================

  setInterval(callbackInt, 5000, arr);

function callbackInt(arr) {
  let res = arr.map((el, i) => el + i);
  console.log(res);
}

// =========================================================================================================

  setTimeout(callbackT, 1000, arr);

function callbackT(arr) {
  let res = arr.map((el) => el**2);
  console.log(res);
}

// =========================================================================================================

// let kek = callback(arr);
// console.log(kek);
// function message() {
//   setTimeout(() => {
//     console.log("after 1 seconds");
//   }, 1000);
//   setTimeout(() => {
//     console.log("after 2 seconds");
//   }, 2000);
//   setTimeout(() => {
//     console.log("after 3 seconds");
//   }, 3000);
//   setTimeout(() => {
//     console.log("after 4 seconds");
//   }, 4000);
//   setTimeout(() => {
//     console.log("after 5 seconds");
//   }, 5000);
// }
// message();

// console.log("after zero seconds");
