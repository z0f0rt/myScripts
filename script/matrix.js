"use strict";
// Для ввода данных, вводите каждый коэффциент, перед перенной, в элементы подмассивов.
// Последним элементов в каждом подмассиве, является значение по правую сторону от знака "="

let parOfSyst1 = [
  [1, 13, 43, 3, 2, 7],
  [3, 56, 12, 2, 7, 3],
  [39, 72, 4, 1, 14, 2],
  [1, 2, 3, 4, 5, 6],
  [6, 5, 4, 3, 2, 1],
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

const changeColumn = (anymatrix, par, whichCol) => {
  let kek = [];
  for (let i = 0; i < anymatrix.length; i++) {
    let arr = [];
    for (let j = 0; j < anymatrix.length; j++) {
      if ((anymatrix[i][whichCol] = par[i][par.length])) {
        arr.push(anymatrix[i][j]);
      }
    }
    kek.push(arr);
  }
  return kek;
};

const secChangeColumn = (mainDet, matrix, par) => {
  let array = [];
  for (let i = 0; i < matrix.length; i++) {
    let absoluteMatrixCopy = [];
    for (let j = 0; j < matrix.length; j++) {
      let container = [...matrix[j]];
      absoluteMatrixCopy.push(container);
    }

    let changedMatrixs = changeColumn(absoluteMatrixCopy, par, i);
    let otherDeterminates = determinant(changedMatrixs);
    let kramersSquads = otherDeterminates / mainDet;
    array.push(kramersSquads);
  }
  return array;
};

let kramer = (m) => {
  let copyMatrix = [];
  for (let i = 0; i < m.length; i++) {
    let arr = [];
    for (let j = 0; j < m.length; j++) {
      if (arr.length !== m[0].length) {
        arr.push(m[i][j]);
      }
    }
    copyMatrix.push(arr);
  }

  let mainDet = determinant(copyMatrix);
  if (mainDet === 0) {
    return `Cистема имеет бесконечно много решений или несовместна!
    В этом случае правило Крамера не поможет!`;
  }
  let det = secChangeColumn(mainDet, copyMatrix, m);
  return det;
};

console.log(kramer(parOfSyst1));
