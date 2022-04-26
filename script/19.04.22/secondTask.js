"use strict";
//Дан массив с числами. Создать новый массив, добавлять в него только те числа у которых сумма с соседними больше 10.

let oldArr = [2, 4, 0, 15, 3, -5, 2];
let newArr = oldArr.reduce((acc, value, index, array) => {
  if (array.length === 1 && value > 10) {
    acc.push(value);
  }
  let sum = 0;
  if (index === 0) {
    sum += value + array[index + 1];
  }
  if (index > 0 && index < array.length - 1) {
    sum += array[index - 1] + value + array[index + 1];
  }
  if (index === array.length - 1) {
    sum += array[index - 1] + value;
  }
  if (sum > 10) {
    acc.push(value);
  }
  return acc;
}, []);
console.log(newArr);
