"use strict";
let humans = [3, 2];
let aliens = [4, 3]; // 2 массива

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
} // две функции callback под названием instruction и instruction2

ever(humans, instruction);
ever(aliens, instruction2); //два вызова своей функции forEach с 1ым и 2ым массивом и callback функции

humans.forEach(instruction);
aliens.forEach(instruction2); //используем метод forEach с 1ой и 2ой функциями callback

let nextGen = [];
let humansPush = (element) => {
  nextGen.push(element);
}; // записываю каждый элемент в массив

ever(humans, humansPush);
console.log(nextGen);

ever(aliens, humansPush);
console.log(nextGen); // вызовы новой функции
