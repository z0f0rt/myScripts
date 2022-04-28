"use strict";
// let arr = [-2, 4, 6, -8];
// let kek = [];
// function instruction(arr, kek) {
//   for (let i = 0; i < arr.length; i++)
//     if (arr[i] > 0) {
//       kek.push(arr[i]);
//     }
//   console.log(kek);
// }
// let x = instruction(arr, kek);
// console.log(x);

//=======================================================================================

let arr = [-2, 4, 3, 0, 7, -22, 5];
function instrument(el) {
  if (el % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function filter(instrument, array) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let z = instrument(array[i]);
    if (z === true) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

let x = filter(instrument, arr);
console.log(x);
console.log(arr);
//=======================================================================================
