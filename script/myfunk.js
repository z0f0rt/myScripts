//TASK 1
function red(a, b, c) {
  if (a == 0) return false;
  let D = b * b - 4 * a * c;
  if (D < 0) {
    return false;
  } else {
    if (D === 0) {
      let x = -b / (2 * a);
      console.log(x);
    }
    if (D > 0) {
      let x = (-b + Math.sqrt(D)) / (2 * a);
      let X = (-b - Math.sqrt(D)) / (2 * a);
      console.log(x);
      console.log(X);
    }
  }
}
red(0, 169, 12);
red(10, 359, 2);

//TASK 2
function equation(b, n) {
  if (n == 0 || b == 0) return false;
  let x = b ** n;
  console.log(x);
}
equation(2, 2);

//TASK 3
function decard(a, b, c, d, e, f, g, h) {
  if (b == d && c == e && f == h && g == a) {
    console.log("Верно! Данные точки образуют прямоугольник.");
  } else {
    console.log("Прямоугольник не образуется!");
  }
}
decard(-2, 2, 2, 2, 2, -2, -2, -2);
decard(1, 2, 3, 4, 3, 5, 6, 7, 8);
