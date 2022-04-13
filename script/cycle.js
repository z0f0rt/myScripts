// let i1 = 0;
// while(i1 < 10) {
//     console.log(i1);
//     i1++;
// }

let arr = [2, 5, 8, 19, 322, 6];
//         0  1  2   3    4  5


// let i = 0;
// while (i < arr.lenght) {
// i++; 

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * arr[i];
}

console.log(arr);
