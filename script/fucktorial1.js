let x = 1;
let y = 7;
function fucktorial(y) {
  for (x; y > 1; y--) {
    x *= y;
  }
  console.log(x);
}
fucktorial(y);

// function fucktorial(n) {
//   let x = 1;
//   while (n > 1) {
//     x = n;
//     n--;
//     console.log(n);
//   }
// }
// fucktorial(7);
