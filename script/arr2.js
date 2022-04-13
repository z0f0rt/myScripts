"use strict";
let m = 0;
let arr = [-2, 5, -6, 11, 228, -256];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  let x = arr[i];
  if (x > m) {
    newArr.push(x);
  }
}
console.log(newArr);

// Дан массив с числами. Выведите элементы этого массива в обратном порядке.
// let arr = [1, 2, 3, 4, 5];
// for (let i = arr.length-1; i >= 0; i--) {
//   console.log(arr[i]);
// }

function cugop(arr, kek) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (kek(arr[i]) == true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let kek = (f) => {
  if (f < 0) {
    f = f * -1;
  }
  return f > 10;
};

let newArray = cugop(arr, kek);
console.log(newArray);
