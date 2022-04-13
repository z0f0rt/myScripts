"use strict";
let a = [228, -324, 3, 43, 64, 13, -5, 1337];
let max = 0;
for (let i = 0; i < a.length; i++) {
  if (a[max] < a[i]) {
    //arr[max] где max = 0 или arr[0] - здесь всё верно!
    max = a[i];
  }
}
console.log(max);

// let min = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[min] > arr[i]) {
//     //  max = arr[0] или arr[arr[0]] - так нельзя!
//     min = arr[i];
//   }
// }

// console.log(min);

// let c;
// c = arr[max];
// arr[max] = arr[min];
// arr[min] = c;
// console.log(arr);
