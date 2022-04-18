"use strict";
let essential = [228, -324, 3, 43, 64, 13, -5, 1337, "string"];

function ukazania(el) {
  if (el === 0) {
    return true;
  } else {
    return false;
  }
}

function mySome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let p = callback(array[i]);
    if (p === true) {
      return true;
    }
  }
  return false;
}

let f = mySome(essential, ukazania);
console.log(f);
