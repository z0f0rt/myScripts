"use strict";
// let dima = { 1: "a", 2: "b", 3: "c" };
// console.log(dima[1], dima[2], dima[3]);

// let obj = { key1: "Витя ", key2: "милый", key3: " бородач" };
// console.log(obj["key1"] + obj["key2"] + obj["key3"]);

// let reply = { "1b": 1, "2b": 2, "c-c": 3 };
// console.log(reply["1b"] + reply["2b"] + reply["c-c"]);

// let obj = { Name: "Dmitry", Surname: "Orlov", Patronomic: "Sergeevich" };
// console.log(obj.Surname, obj.Name, obj.Patronomic);

// let obj = {};

// obj.key1 = "a";
// obj.key2 = "b";
// obj.key3 = "c";

// console.log(obj);

// let obj = { a: 1, b: 2, c: 3 };
// let xXx = "b";
// console.log(obj[xXx]);

// console.log(typeof { a: 1, b: 2, c: 3 });

// console.log(typeof [1, 2, 3]);

// let arrr = [1, 2, 3];
// console.log(typeof arrr);

// let arr = [1, 2, 3];
// console.log(typeof arr[0]);

// let arrrr = ["1", "2", "3"];
// console.log(typeof arrrr[0]);

// console.log(Array.isArray([1, 2, 3]));

// console.log(Array.isArray({ a: 1, b: 2, c: 3 }));

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[1] = 'b';

// console.log(arr1);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[0] = 'b';

// console.log(arr2);

// let slavik = 1337 / 228;
// console.log(slavik.toFixed(3));

// let arrr = [1, 2, 3];
// delete arrr[0];
// delete arrr[1];
// delete arrr[2];
// console.log(arrr);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// let obj = { a: 1, b: 2, c: 3 };
// console.log(obja);

// let obj = { a: 1, b: 2, c: 3 };
// let key = "a";
// console.log(obj[key]);

// let obj = { a: 1, b: 2, c: 3 };
// let sum = obj["a"] + obj["b"] + obj["c"];
// console.log(sum);

// let obj = { a: 13, b: 256, c: 8 };
// console.log(Object.keys(obj).length);

// console.log(Array.isArray({ a: 1, b: 2, c: 3 }));

// let obj = { a: 1, b: 2, c: 3 };
// let key = "a";
// console.log(obj[key]);

// let x = -20;
// if (x > 0) {
//   console.log("Всё верно");
// } else {
//   console.log("Неверно");
// }

// let test1 = 3;
// let test2 = "3";

// if (test1 !== test2) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// let num = 1;

// if (num == 0 || num == 1) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// let num = 2;

// if (num == 0 || num == 1 || num == 2) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// let num1 = -7;
// let num2 = 11;
// if (!(num1 >= 0 || num2 <= 10)) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// let test = 1;

// if (test == false) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// let test = true;

// if (!!test) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// let test = 3;
// if (test) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// let test = "abc";

// if (test) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// let test = "0";

// if (test) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// let day = 82;
// if (day > 0 && day <= 10) {
//   console.log("Первая декада");
// }
// if (day > 10 && day <= 20) {
//   console.log("Вторая декада");
// }
// if (day > 20 && day <= 30) {
//   console.log("Третья декада");
// }

// let day1 = 1;
// if (day1 > 0 && day1 <= 10) {
//   console.log("Первая декада");
// } else if (day1 > 10 && day1 <= 20) {
//   console.log("Вторая декада");
// } else if (day1 > 20 && day1 <= 31) {
//   console.log("Третья декада");
// } else {
//   console.log("Неверно! Укажите число месяца от 1 до 31");
// }

let num = 11;
if (!(num > 10 && num < 99)) {
  console.log("Внимаение: num не входит в диапозон от 10 до 99");
}
if (num > 10 && num < 99) {
  let string = String(num);
  let x = string.split("");
  let num1;
  let summ = 0;
  for (let i = 0; i < x.length; i++) {
    num1 = Number(x[i]);
    x[i] = num1;
    summ = summ + x[i];
  }
  console.log("Сумма цифр числа входящего в диапозон от 10 до 99: " + summ);
  if (summ > 9 && summ <= 99) {
    console.log("Cумма цифр двузначна");
  }
  if (summ < 9) {
    console.log("Cумма цифр однозначна");

  }
}
// Ну и задачка