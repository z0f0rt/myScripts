function fucktorial(n) {
  let x = 1;
  for (x; n > 1; n--) {
    x *= n;
  }
  console.log(x);
}
fucktorial(7);

// function fucktorial(n) {
//   let x = 1;
//   while (n > 1) {
//     x = n;
//     n--;
//     console.log(n);
//   }
// }
// fucktorial(7);
