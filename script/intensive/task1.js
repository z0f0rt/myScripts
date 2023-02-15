"use strict";
const sum = (a, b) => {
  let amount = +a + +b;
  let res = Number.isInteger(amount) ? amount : +amount.toFixed(3);
  return res;
};
