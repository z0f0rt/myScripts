function fucktorial(n) {
  let x = 1;
  for (x; n > 1; n--) {
    x *= n;
  }
  console.log(x);
}
fucktorial(4);

function fucktorial(n) {
  let x = 1;
  if (n == 0 || n == 1) {
    return x;
  } else {
    for (n; n >= 1; n--) {
      x *= n;
    }
    return x;
  }
}
x = fucktorial(5);
console.log(x);

