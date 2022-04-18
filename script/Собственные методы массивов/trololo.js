"use strict";
//===============ВЫВЕСТИ КОЛИЧЕСТВО ЧЁТНЫЙ ЧИСЕЛ В МАССИВЕ(Reduce)====================
let numbers = [12, 23, 45, 56, 78, 89];
//sum = sum + arr[i]
let top = numbers.reduce((acc, v) => {
  if (v % 2 == 0) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0);
console.log(top);

//===============ВЫВЕСТИ КОЛИЧЕСТВО ЧЁТНЫЙ ЧИСЕЛ В МАССИВЕ====================

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    sum++;
  }
}

console.log(sum);
