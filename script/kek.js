"use strict";
let arr = [-1, -24, 316, 3, -11, 36, 7, 8, 11, 29, 3, 14, 123, 5, 6, 23, 45];
console.log("Всего индексов = " + (arr.length - 1));
for (let i = 0; i < arr.length; i++) {
  console.log("При элементе массива = " + i + " число = " + arr[i]);
}

// Дано число 12345. Найдите сумму цифр этого числа.
let bigNumber = 12345;
let bigString = String(bigNumber);
console.log(
  bigString[0] * bigString[1] * bigString[2] * bigString[3] * bigString[4]
);
