"use strict";
//Дан массив A с числами. Создать объект, внутри которого будут 2 поля: в одном массив с чётными числами из массива A,
// в другом - массив с нечётными числами из массива A.

let A = [5, 7 - 15, 28, 3, 139, 2, 6, 5];
let reducer = A.reduce(
  (acc, v) => {
    if (v % 2 === 0) {
      acc.even.push(v);
    } else {
      acc.odd.push(v);
    }
    return acc;
  },
  {
    odd: [],
    even: [],
  }
);
console.log(reducer);
