"use strict";

function sum(n) {
    console.log(n);
  return function (a) {
    return sum(a + n);
  };
}
sum(2)(10)(15)(3);
