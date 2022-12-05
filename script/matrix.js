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

// let detFinder = (matrix) => {
//   if (matrix.length === 1) {
//     return matrix[0][0];
//   }
//   if (matrix.length === 2) {
//     return matrix2[0][0] * matrix2[1][1] - matrix2[1][0] * matrix2[0][1];
//   }
//   if(matrix.length >=3){
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

// let sq = (a1, a2, b1, b2, s1, s2) => {
//   let detMain = a1 * b2 - a2 * b1;
//   if (detMain === 0) {
//     console.log("Система имеет бесконечно много решений");
//   }
//   let detX = s1 * b2 - s2 * b1;
//   console.log(detX);
//   let detY = a1 * s2 - a2 * s1;

//   let x = detX / detMain;
//   let y = detY / detMain;
//   if (x === 0 || y === 0) {
//     return "Один из корней равен 0";
//   } else {
//     let res = { x, y };
//     res.x = x;
//     res.y = y;
//     return res;
//   }
// };
// console.log(sq(a1, a2, b1, b2, s1, s2));

// Дана система уравнений
// 6*x + 13*y = 43;
// 32*x + 2*y = 12;

let inputParamsOfSystem1 = [
  [6, 13, 43],
  [32, 2, 12],
];

let inputParamsOfSystem2 = [
  [6, 13, 43, 2],
  [32, 2, 12, 7],
  [3, 7, 4, 14],
];

const determinant = (m) =>
  m.length == 1
    ? m[0][0]
    : m.length == 2
    ? m[0][0] * m[1][1] - m[0][1] * m[1][0]
    : m[0].reduce(
        (acc, el, i) =>
          acc +
          (-1) ** (i + 2) *
            el *
            determinant(m.slice(1).map((e) => e.filter((_, j) => i != j))),
        0
      );

const changeColumn = (matrix, par, whichCol) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][whichCol] = par[i][par.length];
  }
  return matrix;
};

// console.log(changeColumn(editP, params, 1));

let kramer = (m) => {
  let copyMatrix = [];
  for (let i = 0; i < inputParamsOfSystem2.length; i++) {
    let arr = [];
    for (let j = 0; j < inputParamsOfSystem2.length; j++) {
      if (arr.length != inputParamsOfSystem2[0].length) {
        arr.push(inputParamsOfSystem2[i][j]);
      }
    }
    copyMatrix.push(arr);
  }
  // console.log(copyMatrix);
  let mainDet = determinant(copyMatrix);

  let change = changeColumn(copyMatrix, inputParamsOfSystem2, 2);
  console.log(change);
  
};

console.log(kramer(inputParamsOfSystem2));

let params = [
  [6, 13, 43, 2],
  [32, 2, 12, 7],
  [3, 7, 4, 14],
];

let editP = [
  [6, 13, 43],
  [32, 2, 12],
  [3, 7, 4],
];
