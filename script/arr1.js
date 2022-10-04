"use strict";
// Меняем старый массив по любым способом и выводим новый (изменённый)
let arr = [3, 4, 6, -10, 335, 69, -228, 18];
let newElem;
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newElem = arr[i] + i-1;
  newArr.push(newElem);
}
console.log(newArr);
