"use strict";
let arr = [1, 2, 3];
let newArr = [];
arr.forEach((el) => {
  let elMuttable = el * 2;
  newArr.push(elMuttable);
});
console.log(newArr);
