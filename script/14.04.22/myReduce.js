"use strict";
function reduce(array, callback, accumulator) {
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}
let func = (acc, v) => acc + v; 
let arr = [2, 8, 5, 19, 322, 6];

let x = reduce(arr, func, 1);
console.log(x);

// // должно работать так же как и
// let y = arr.reduce(func, 1);
// console.log(y);
