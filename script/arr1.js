"use strict";
// Меняем старый массив по любым способом и выводим новый (изменённый)
let arr = [3, 4, 6, -10, 335, 69, -228, 18];
let x = 1;
let y;
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  y = arr[i] + x;
  newArr.push(y);
}
console.log(newArr);
