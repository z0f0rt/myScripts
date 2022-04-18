"use strict";

let Djonson = [2, 3, 7, 0, 1, 3, 2, 8];

function myFunctionCallback(ourIndex) {
  if (ourIndex === 8) {
    return true;
  } else {
    return -1;
  }
}

function myFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let e = callback(array[i]);
    if (e === true) {
      return i;
    }
  }
}

let f = myFind(Djonson, myFunctionCallback);
console.log(f);
