"use strict";
// Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.
// let elems = document.querySelectorAll(".inp");
// let bt = document.querySelector("#bt");
// let res = document.querySelector("#a1");

// bt.addEventListener("click", func);
// let perem;
// let numb;
// function func() {
//   let sum = 0;
//   for (let i = 0; i < elems.length; i++) {
//     perem = elems[i];
//     numb = Number(perem.value);
//     // console.log(typeof numb);
//     sum = sum + numb;
//   }
//   res.textContent = sum;
// }

// Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.
// let elems = document.querySelectorAll(".inp");
// let kek;
// let lol;
// for (let elem of elems) {
//   elem.addEventListener("blur", func);
// }

// function func() {
//   this.value = Number(this.value) + 1;
// }

// Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.
// let elems = document.querySelectorAll("p");
// for (let elem of elems) {
//   elem.addEventListener("click", func);
// }

// function func() {
//   this.textContent = Number(this.textContent)**2;
// }

// Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
// let elems = document.querySelectorAll("p");

// for (let elem of elems) {
//   elem.addEventListener("click", func);
// }

// function func() {
//   this.textContent = this.textContent + "!";
//   this.removeEventListener("click", func);
// }

let dv = document.querySelector("#elem");
let bt = document.querySelector("#bt");

bt.addEventListener("click", func);

function func() {
  dv.style.width = "200px";
  dv.style.height = "200px";
  dv.style.border = " solid 10px blue";
  dv.innerHTML = "Старая чушка плодила подсвинков";
  dv.style.fontSize = "20px";
  dv.style.backgroundColor = "grey";
}
