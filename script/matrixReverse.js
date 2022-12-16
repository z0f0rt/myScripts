"use strict";

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

let a = [
  [3, -2, 4],
  [3, 4, -2],
  [2, -1, -1],
];
let b = [[21], [9], [10]];

const variablesX = (matrix) => {
  let X = [];
  for (let i = 0; i < matrix.length; i++) {
    X.push(i + 1);
  }
  return X;
};
let x = variablesX(a);

let matrixDeterminant = determinant(a);

const minusColonka = (matrix, kakaiaKolonka) => {
  let absoluteMatrixCopy = [];
  for (let j = 0; j < matrix.length; j++) {
    let container = [...matrix[j]];
    absoluteMatrixCopy.push(container);
  }

  let kek = [];
  for (let i = 0; i < absoluteMatrixCopy.length; i++) {
    absoluteMatrixCopy[i].splice(kakaiaKolonka, 1);
    kek.push(absoluteMatrixCopy[i]);
  }
  return kek;
  // let emptyArr = [];
  // for (let i = 0; i < kek.length; i++) {
  //   emptyArr.push(kek);
  // }
  // return emptyArr;
};

const minusRiad = (matrix, column) => {
  matrix.splice(column, 1);
  return matrix;
};
const kek = (matrix, c) => {
  let jojo = [];
  for (let j = 0; j < matrix.length; j++) {
    let copy = [];
    for (let i = 0; i < matrix.length; i++) {
      let container = [...matrix[i]];
      copy.push(container);
    }
    copy.splice(c, 1);
    return copy;
  }

  return jojo;
};
const nadKek = (matrix) => {
  let matrixOfResMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    let resMatrix = kek(matrix, i);
    let emptyArrat = [];
    for (let j = 0; j < matrix.length; j++) {
      emptyArrat.push(resMatrix);
    }
    matrixOfResMatrix.push(emptyArrat);
  }

  return matrixOfResMatrix;
};

const eta = (matrix) => {
  let fly = nadKek(matrix);
  let arr = [];
  for (let i = 0; i < fly.length; i++) {
    let dush = [];
    for (let j = 0; j < fly.length; j++) {
      let jej = minusColonka(fly[i][j], j);
      let jej1 = determinant(jej);
      if (dush.length !== fly.length) {
        dush.push(jej1);
      }
      continue;
    }
    arr.push(dush);
  }
  return arr;
};
let matrixOfMinors = eta(a);

const algebrAddon = (matrix) => {
  let ulbi = eta(matrix);
  for (let i = 0; i < ulbi.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < ulbi[i].length; j++) {
        if (j % 2 !== 0) {
          ulbi[i][j] = -ulbi[i][j];
        }
      }
    } else {
      for (let k = 0; k < ulbi[i].length; k++) {
        if (k % 2 === 0) {
          ulbi[i][k] = -ulbi[i][k];
        }
      }
    }
  }
  return ulbi;
};
let matrixAlgAddons = algebrAddon(a);

const transposeMatrix = (array, arrayLength) => {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push([]);
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < arrayLength; j++) {
      newArray[j].push(array[i][j]);
    }
  }

  return newArray;
};
let transMatrix = transposeMatrix(matrixAlgAddons, matrixAlgAddons.length);

const finalRes = (det, matrix) => {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let arr = [];
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = matrix[i][j] * det ** -1;
      arr.push(matrix[i][j]);
    }
    result.push(arr);
  }
  return result;
};

let revMatrix = finalRes(matrixDeterminant, transMatrix);

const multiplyMatrix = (matrix1, matrix2, x) => {
  let result = [];
  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrix1[0].length; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
};

let tik = multiplyMatrix(revMatrix, b);
console.log(tik);
