"use strict";
let humans = [3, 2];
let aliens = [4, 3];
for (let i = 0; i < humans.length; i++) {
  console.log(humans[i]);
}

function instruction(element) {
  console.log(element);
  console.log(element * element);
}

function instruction2(element) {
  let fury = element * element - element;
  console.log(fury + 5);
}

function ever(array, globalInstruction) {
  for (let i = 0; i < array.length; i++) {
    globalInstruction(array[i]);
  }
}
ever(humans, instruction);
ever(aliens, instruction2);

humans.forEach(instruction);
aliens.forEach(instruction2);

let nextGen = [];
let humansPush = (element) => {
  nextGen.push(element);
};

ever(humans, humansPush);
console.log(nextGen);

ever(aliens, humansPush);
console.log(nextGen);
