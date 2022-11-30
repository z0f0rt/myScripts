// То же самое, что и в предыдущей задачке, но теперь мы возвращаем массив из чисел, которые попались в массиве 2 или более раза.
// Пример: если изначальный массив - [2, 8, 1, 4, 8, 9, 2], то ответ будет - [8, 2]. Пример2: если изначальный массив - [4, 7, 1, 15], то ответ будет - [].

let arr = [2, 8, 8, 1, 4, 8, 9, 2];

let findEl = (array, v) => {
  for (let i = 0; i < array.length; i++) {
    if (v === array[i]) {
      return true;
    }
  }
  return false;
};

let findElInConsiquiens = (array, index) => {
  for (let i = index + 1; i < array.length; i++) {
    if (array[index] === array[i]) {
      return true;
    }
  }
  return false;
};

let newArr = [];
for (let k = 0; k < arr.length; k++) {
  let isExist = findEl(newArr, arr[k]);
  if (isExist) {
    continue;
  }
  let isExistInNext = findElInConsiquiens(arr, k);
  if (isExistInNext) {
    newArr.push(arr[k]);
  }
}
console.log(newArr);
