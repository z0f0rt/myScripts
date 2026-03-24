"use strict";

const animal = {
  eats: true,
  breathee: false,
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

// in rabbit can find both properties (eats && breathe)
console.log(rabbit.jumps); // true
console.log(rabbit.eats); // true
console.log(rabbit.breathe); // false

// analog by spread
// rabbit = { ...animal, ...rabbit };
// console.log(rabbit.jumps); // true
// console.log(rabbit.eats); // true
// console.log(rabbit.breathe); // false
