"use strict";
var animal = {
  eats: true,
  kek: false,
};
var rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

// в rabbit можно найти оба свойства
console.log(animal.jumps); // true
console.log(animal.eats); // true
console.log(animal.kek);
