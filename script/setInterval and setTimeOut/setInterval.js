"use strict";
// let sdvigX = 0;
// let sdvigY = 0;
let Marinka = document.getElementById("Marinka");
let right = 0;
let stoping;

// let func = () => {
//   test.style.marginLeft = sdvigX + "px";
//   sdvigX = sdvigX + 0.3;
//   test.style.marginTop = sdvigY + "px";
//   sdvigY = sdvigY + 0.15;
// };
move();
function move() {
  Marinka.style.paddingLeft = right + "px";
  right = right + 1;
  stoping = setTimeout(move, 20);
}

// let timer = setInterval(func, 10);

document.getElementById("stop").onclick = () => {
  clearTimeout(stoping);
};

let timer;
let time = 10;

function kek() {
  document.getElementById("count").innerHTML = time;
  if (time <= 0) {
    alert("Расчёт окончен капрал!");
  } else {
    time--;
    timer = setTimeout(kek, 1000);
  }
}
kek();
