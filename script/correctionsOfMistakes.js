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

//=========================================================================

// let slavik = 1337 / 228;
// console.log(slavik.toFixed(3));

//=========================================================================

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

//======================================================================

// let obj = { a: 13, b: 256, c: 8 };
// console.log(Object.keys(obj).length);

//======================================================================

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

//=========================================================================

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

//=========================================================================

// let num = 11;
// if (!(num > 10 && num < 99)) {
//   console.log("Внимаение: num не входит в диапозон от 10 до 99");
// }
// if (num > 10 && num < 99) {
//   let string = String(num);
//   let x = string.split("");
//   let num1;
//   let summ = 0;
//   for (let i = 0; i < x.length; i++) {
//     num1 = Number(x[i]);
//     x[i] = num1;
//     summ = summ + x[i];
//   }
//   console.log("Сумма цифр числа входящего в диапозон от 10 до 99: " + summ);
//   if (summ > 9 && summ <= 99) {
//     console.log("Cумма цифр двузначна");
//   }
//   if (summ < 9) {
//     console.log("Cумма цифр однозначна");
//   }
// }

//=========================================================================

// let age = 17;
// let adult;
// if (age >= 18) {
//   adult = true;
// } else {
//   adult = false;
// }
// console.log(adult);

// let age1 = 19;
// let awg = age1 >= 18 ? true : false;
// console.log(awg);

// let num = 10;
// let result;
// console.log(num >= 0 ? (result = 1) : (result = -1));
// вот он ТЕРНАРНЫЙ ОПЕРАТОР УСЛОВИЕ И 2 ВАРИАНТА! ЕСЛИ СОБЛЮДАЕТСЯ УСЛОВИЕ, ТО 1ый ВАРИАНТ, ЕСЛИ НЕТ ТО 2ой

//=========================================================================

// let garbage = 2;
// while (garbage <= 33) {
//   console.log(garbage);
//   garbage += 6;
// }

// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = String(arr[i]);
//   if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5) {
//     console.log(arr[i]);
//   }
// }

// let arr1 = [-1, 1, 316, 3, -11, 36, 6, 8, 11, 29, 10, 1994, 123, 5, 6, 23, 4];
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] === i) {
//     console.log(arr1[i]);
//   }
// }

// let arr2 = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let elem of arr2) {
//   sum = elem + sum;
// }
// console.log(sum);

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let sum = 0;
// for (let key in obj) {
//   sum = obj[key] + sum;
// }
// console.log(sum);

// let array = [2, 266, 67, 146, 0, -9, 892, 1, -154];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 0) {
//     break;
//   } else {
//     newArray.push(array[i]);
//   }
// }
// console.log(`Старый масиив:${array}`);
// console.log(`Новый массив: ${newArray}`);

// let array = [4, 2, 6, 1, 0, -9, 892, 1, -154];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] < 0) {
//     break;
//   } else {
//     sum = sum + array[i];
//   }
// }
// console.log(sum);

// let array = [10, 24, 66, 6, 8, -9, 8, 16, 54];
// let sum = 0;
// let skokchisel = 1;
// for (let i = 0; i < array.length; i++) {
//   if (sum < 100) {
//     sum = sum + array[i];
//     skokchisel++;
//   } else {
//     break;
//   }
// }
// console.log(skokchisel, sum);

// let arr = ["a", "b", "c", "d", "e"];
// let marker = false;
// for (let element of arr) {
//   if (element === "c") {
//     marker = true;
//     break;
//   }
// }
// if (marker === true) {
//   console.log("Да!");
// } else {
//   console.log("Нет!");
// }

// let num = 31;
// let marker = true;
// for (let i = 2; i < num; i++) {
//   if (num % i == 0) {
//     marker = false;
//     break;
//   }
// }
// if (marker === true) {
//   console.log("Простое");
// } else {
//   console.log("Не простое");
// }

// let num = 13;
// let ckok = 1;
// while (num < 1000) {
//   num = num * 3;
//   ckok++;
// }
// console.log(ckok, num);

// let str = "";
// let kek = "-";
// for (let i = 1; i <= 9; i++) {
//   str = str + kek + i;
// }

// console.log(str);

// for (let i = 10; i < 1000; i++) {
//   let string = String(i);
//   if (Number(string[0]) + Number(string[1]) === 5) {
//     console.log(string);
//   }
// }

// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i);
//   }
// }

//=========================================================================

//11 12 13 21 22 23 31 32 33
// let str = "";
// for (let i = 11; i <= 33; i += 10) {
//   str = "";
//   for (let j = 0; j <= 2; j++) {
//     let num = i + j;
//     console.log(num + " ");
//   }
// }

//=========================================================================

// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr[i] = i + 1;
// }
// console.log(arr);

let arr = ["a", "b", "c", "d", "e"];
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] == arr[0 - 1]) {
    break;
  } else {
    arr.push(arr[i]);
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[5]) {
    break;
  } else {
    arr.shift(arr[i]);
  }
}
console.log(arr);



let arr1 = ["a", "b", "c", "d", "e"];
let a = [];
for (let i = arr1.length - 1; i >= 0; i--) {
  a.push(arr1[i]);
}
for (let j = 0; j < a.length; j++) {
  arr1.push(a[j]);
}
console.log(a);
