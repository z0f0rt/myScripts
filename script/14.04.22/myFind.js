"use strict";
let Djonson = [2, 3, 7, 0, 1, 3, 2, 8];

function myFunctionCallback(ourElement) {
  if (ourElement === 3) {
    return true;
  }
}

function myFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let e = callback(array[i]);
    if (e === true) {
      return array[i];
    }
  }
}

let f = myFind(Djonson, myFunctionCallback);
console.log(f);
