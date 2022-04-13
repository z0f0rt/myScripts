"use strict";
let arr = [-13, 62, -15, -35, 18, 1337, 778, 256];
for (let i = 0; i < arr.length; i++) {
  for (let i = 1; i < arr.length; i++) {
    //цикл - выполнять пока
    if (arr[i] < arr[i - 1]) {
      // пока наше число цикла будет больше, чем arr[i - 1] - (т.е.если рассматривать первый индекс массива, он будет больше нулевого)
      let c; //
      c = arr[i - 1]; //здесь просто меняем местами наши числа, который сравнили
      arr[i - 1] = arr[i]; //
      arr[i] = c; //
    }
  }
}
console.log(arr);


// function t (a,b){
//     return b - a
// }
// arr.sort(function(a, b) {
//   return b - a;
//  });
// console.log(arr);
