function fucktorial(n) {
  for (let x = 1; n > 1; n--) {
    x = x *= n;

    console.log(x);
  }
}
fucktorial(5);
