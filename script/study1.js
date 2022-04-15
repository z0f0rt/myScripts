let arr = [-1, -24, 316, 3, -11, 36, 7, 8, 11, 29, 3, 14, 123, 5, 6, 23, 45];
let arr1 = [...arr];
for (let i = 0; i < arr.length; i += 6) {
  if (arr1[0] !== undefined) {
    if (arr1[1] !== undefined) {
      if (arr1[2] !== undefined) {
        console.log(arr1[0], arr1[1], arr1[2]);
      } else {
        console.log(arr1[0], arr1[1]);
      }
    } else {
      console.log(arr1[0]);
    }
  }
  arr1 = arr1.slice(3);
  if (arr1[0] !== undefined) {
    if (arr1[1] !== undefined) {
      if (arr1[2] !== undefined) {
        console.log(arr1[2], arr1[1], arr1[0]);
      } else {
        console.log(arr1[1], arr1[0]);
      }
    } else {
      console.log(arr1[0]);
    }
  }
  arr1 = arr1.slice(3);
}


