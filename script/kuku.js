"use strict";
// const pi = 3.14;
// let D = 26;
// let C = (pi * D ** 2) / 4;
// console.log(C);
// скрипт находит длину окружности

let string = "999";
console.log(string.length);
let x = string.split(""); //x = [ '9', '9', '9' ]
let num;
let summ = 0;
for (let i = 0; i < x.length; i++) {
  num = Number(x[i]);
  x[i] = num;
  summ = summ + x[i];
}
console.log(summ);

// let a = "12345476578687464679";
// let sum = a.split("");
// let z = [];
// let room;
// for (let i = 0; i < sum.length; i++) {
//   z.push(Number(sum[i]));
// }
// let sum1 = 0;
// for (let i = 0; i < z.length; i++) {
//   sum1 = sum1 + z[i];
// }
// console.log(sum1);

// let b = "12345";
// console.log(Number(b[0]) + Number(b[1]) + Number(b[2]) + Number(b[3]) + Number(b[4]));
