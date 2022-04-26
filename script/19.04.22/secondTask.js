"use strict";
//Дан массив с числами. Создать новый массив, добавлять в него только те числа
//у которых сумма с соседними больше 10.

// let euros = [2, 4, 6, 8];
// let euros2 = [];
// let average = euros.reduce((total, amount, index, array) => {
//   total += amount;
//   if (index === array.length - 1) {
//     return total / array.length;
//   } else {
//     return total;
//   }
// });
// console.log(average);

let arr = [2, 4, 6, 8, 6, 2, 4];
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
  arr.reduce((acc, iterElem, index, arr) => {
    let x = arr[i - 1] + arr[i] + arr[i + 1] > 10;
    if (x > 10) {
     console.log(arr[i])
      return;
    }
  }, []);
}
console.log(acc);

// let arr = [1, 4, 1, 8, 0, 7, 4];
// let arr1 = [];
// for (let i = 1; i < arr.length; i++) {
//   arr[i - 1] + arr[i] + arr[i + 1] > 10) {
//     arr1.push(arr[i]);
//   } else {
//     continue;
//   }
// }
// console.log(arr1);
