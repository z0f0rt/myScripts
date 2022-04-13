// let a = 5;
// let b = 11;
// a = a + b;
// b = a - b;
// a = a - b;

let duck = "Лол";
let kek = "Хех";
function showMessage(from, text) {
  from = "*" + from + "*"; // немного украсим "from"

  console.log(from + ": " + text);
}

showMessage(duck, "Привет"); // *Лол*: Привет
showMessage(kek, "Привет"); //*Хех*: Привет
// значение "from" осталось прежним, функция изменила значение локальной переменной
console.log(duck); // Аня
console.log(kek);
// В АРГУМЕНТ ПРИ ВЫЗОВЕ ФУНКЦИИ, ПОПАДАЕТ КОПИЯ ВЫЗЫВАЕМОЙ ПЕРЕМЕННОЙ И ФУНКЦИЯ ПРОИЗВОДИТЬ РАБОТУ С КОПИЕЙ
