"use strict";
//Дан массив с числами. Узнать сколько элементов с начала массива надо сложить
//чтобы в сумме получилось больше 23
let arr = [6, 6, 0, 3, 18, 189, 14, -63, 8];
let num = 0;
let f = arr.reduce((acc, v) => {
  if (acc > 23) {
    console.log(num);
    return;
  } else {
    num++;
    return acc + v;
  }
});
