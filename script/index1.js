let a = 50;
let b = 10;
let c;
c = b;
b = a;
a = c;
// console.log(a, b);

let x = [
  ["Мы", 2, 3, 4],
  [3, "с", 4, 6],
  [8, 7, "Мариной", 5],
  [4, 8, 6, "программисты!"],
];
console.log(x[0][0] + " " + x[1][1] + " " + x[2][2] + " " + x[3][3]);

let obj = {
  a: 1250,
  b: 72710,
  c: 4723724730,
  d: 13453470,
  e: 3453753,
  f: 753735,
  g: 735573,
  h: 42341,
  i: 421,
  j: 613231,
};
let sum = 0;
for (let key in obj) {
  let x = String(obj[key]);
  console.log(typeof x);
  if (x[0] === "1" || x[0] === "2") {
    sum = +sum + +x;
  }
}
console.log(sum);
