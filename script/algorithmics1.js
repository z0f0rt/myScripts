// Составьте массив промежуточных сумм целых чисел в массиве. Пример: если изначальный массив - [2, 8, 1, 4], то результат будет [2, 10, 11, 15]

let arr = [2, 8, 1, 4];

let res = arr.reduce((acc, v, i, arr) => {
  let sum = 0;
  if (i === 0) {
    acc.push(v);
  }
  if (i > 0 && i < arr.length - 1) {
    sum += v + acc[i - 1];
    acc.push(sum);
  }
  if (i === arr.length - 1) {
    sum += v + acc[i - 1];
    acc.push(sum);
  }
  return acc;
}, []);
console.log(res);

