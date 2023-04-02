"use strict";
let input;
let p;
const arr = ["a", "b", "c"];
const obj = { Аня: "Козлова", Юля: "Никифорова", Оля: "Королёва" };

arr.forEach((el, i) => {
  console.log(el, obj[Object.keys(obj)[i]]);
});
