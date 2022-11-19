"use strict";

function sum(b) {
  console.log(b);
  return function (a) {
    return sum(b + a);
  };
}
sum(2)(10)(15)(3);
