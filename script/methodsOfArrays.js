"use strict";
// function reduce(array, callback, accumulator) {
//   for (let i = 0; i < array.length; i++) {
//     accumulator = callback(accumulator, array[i]);
//   }
//   return accumulator;
// }

// let arr = [2, 8, 5, 19, 322, 6];

// let x = reduce(arr, func, 1);
// let func = (acc, v) => acc + v;
// console.log(x);

// // // должно работать так же как и
// // let y = arr.reduce(func, 1);
// // console.log(y);

//===============РЕАЛИЗАЦИЯ МЕТОДА forEach====================
let humans = [1713, 2, 263, -24, 13];
// let humansNew = [];

// humans.forEach((kek) => humansNew.push((kek += kek)));
// console.log(humansNew);

function myForEach(func, array, item) {
  for (let i = 0; i < array.length; i++) {
    item = func(array, item);
  }
}
let func = (item) => console.log(item);
myForEach(func, humans);

// humans.myForEach((item) => {
//   console.log(item);
// });
