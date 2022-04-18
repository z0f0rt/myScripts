"use strict";

let aloha = [5, 4, 6, 7, 3];

function myInstruction(el) {
  return el * 2;
}

function jopaboy(callback, array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let z = callback(array[i]);
    newArr.push(z);
  }
  return newArr;
}

let v = jopaboy(myInstruction, aloha);
console.log(v);
console.log(aloha);
