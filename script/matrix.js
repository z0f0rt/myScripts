"use strict";
let matrix2 = [
  [1, 2],
  [4, 5],
];

let determinantMatrix2 = matrix2[0][0] * matrix2[1][1] - matrix2[1][0] * matrix2[0][1];

console.log(`Определитель матрицы 2х2: ${determinant1}`);

// ===================================================================2x2======================================================================

let matrix3 = [
  [3, 2, 3],
  [4, 5, 6],
  [7, 8, 8],
];

let determinantMatrix3 =
  matrix3[0][0] *
    (matrix3[1][1] * matrix3[2][2] - matrix3[2][1] * matrix3[1][2]) -
  matrix3[1][0] *
    (matrix3[0][1] * matrix3[2][2] - matrix3[2][1] * matrix3[0][2]) +
  matrix3[2][0] *
    (matrix3[0][1] * matrix3[1][2] - matrix3[1][1] * matrix3[0][2]);
    console.log(`Определитель матрицы 3х3: ${determinant2}`);