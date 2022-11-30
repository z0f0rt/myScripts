"use strict";

let matrix2 = [
  [1, 2],
  [4, 5],
];

let matrix3 = [
  [3, 2, 3],
  [4, 5, 6],
  [7, 8, 8],
];

// let detFinder = (anyMatrix) => {
//   if (anyMatrix.length <= 2) {
//     let determinantMatrix2 =
//       matrix2[0][0] * matrix2[1][1] - matrix2[1][0] * matrix2[0][1];
//     return determinantMatrix2;
//   }
//   let determinantMatrix3 =
//     matrix3[0][0] *
//       (matrix3[1][1] * matrix3[2][2] - matrix3[2][1] * matrix3[1][2]) -
//     matrix3[1][0] *
//       (matrix3[0][1] * matrix3[2][2] - matrix3[2][1] * matrix3[0][2]) +
//     matrix3[2][0] *
//       (matrix3[0][1] * matrix3[1][2] - matrix3[1][1] * matrix3[0][2]);
//   return determinantMatrix3;
// };
// console.log(detFinder(matrix3));

//==========================2x2/3x3===========================

// Дана система уравнений
// a1 * x + b1 * y = s1;
// a2 * x + b2 * y = s2;

let a1 = 506;
let b1 = 66;
let s1 = 2315.1;
let x;
let a2 = 66;
let b2 = 11;
let s2 = 392.3;
let y;

let sq = (a1, a2, b1, b2, s1, s2) => {
  let detMain = a1 * b2 - a2 * b1;
  if (detMain === 0) {
    console.log("Система имеет бесконечно много решений");
  }
  let detX = s1 * b2 - s2 * b1;
  console.log(detX);
  let detY = a1 * s2 - a2 * s1;

  let x = detX / detMain;
  let y = detY / detMain;
  if (x === 0 || y === 0) {
    return "Один из корней равен 0";
  } else {
    let res = { x, y };
    res.x = x;
    res.y = y;
    return res;
  }
};
console.log(sq(a1, a2, b1, b2, s1, s2));
