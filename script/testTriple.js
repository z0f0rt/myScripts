"use strict";
const products = [
  { a: 1 },
  { b: 2 },
  { c: 3 },
  { d: 4 },
  { e: 5 },
  { f: 6 },
  { g: 7 },
  { h: 8 },
  { i: 9 },
  { g: 10 },
  { k: 11 },
];
const pages = () => {
  let MAX = 3;
  let arr = [];
  for (let i = 0; i < products.length; i += MAX) {
    let triple = products.slice(i, i + MAX);
    arr.push(triple);
  }
  return arr;
};
let kek = pages();
console.log(kek);
