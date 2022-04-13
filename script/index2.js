let a = 50;
let b = 150;
let c = 15;
let D;
// a*x*x + b*x + c = 0
D = b * b - 4 * a * c;
if (D < 0) {
  console.log("НЕТ РЕШЕНИЙ ЛОЛ");
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
