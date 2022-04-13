// let arr = ["Куй,", " пока ", "горячо"];
// // console.log(arr[0] + arr[1] + arr[2]);
// arr[0] = "Хорошо";
// console.log(arr); // ДАННАЯ ШТУКА 1. ВЫВОДИТ ВМЕСТЕ ВСЕ ЭЛЕМЕНТЫ МАССИВА 2. МЕНЯЕТ ПЕРВЫЙ ЭЛЕМЕНТ МАССИВА НА НОВЫЙ

"use strict";
let y = 0;
let arr = [-5, -3, 5, 10, 20, 15];
let summ = 0;
for (let i = 0; i < arr.length; i++) {
  if (y > arr[i]) {
  } else {
    summ = summ + arr[i];
  }
}
console.log(summ); // ДАННАЯ ШТУКА СУМИРУЕТ ВСЕ ПОЛОЖИТЕЛЬНЫЕ ЧИСЛА МАССИВА
