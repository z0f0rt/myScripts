let arr = [-1, -24, 316, 3, -11, 36, 7, 8, 11, 29, 3, 14, 123, 5, 6, 23, 4];
let MAX = 3;
for (let i = 0; i < arr.length; i += MAX) {
  let triple = arr.slice(i, i + MAX);
  triple = (i / MAX) % 2 === 0 ? triple : triple.reverse();
  triple = triple.reduce((acc, v) => acc + v + " ", "");
  console.log(triple);
}
