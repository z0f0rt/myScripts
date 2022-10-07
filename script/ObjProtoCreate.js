"use strict";
let object = Object.create(null);
object.x = 10;
console.log(object);

// =========================================================================================================

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Dmitry";
me.isHuman = true;

person.printIntroduction();
me.printIntroduction();

