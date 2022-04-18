"use strict";

let Djonson = [
  "Майя",
  "Ребекка",
  "Екатериа",
  "Карина",
  "Евдундосья",
  "Снандулья",
  "Клавдия",
  "Гертруда",
];

function myFunctionCallback(ourIndex) {
  if (ourIndex === "Гертруда") {
    return true;
  } else {
    return false;
  }
}

function myFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let e = callback(array[i]);
    if (e === true) {
      return i;
    }
  }
  return -1;
}

let f = myFind(Djonson, myFunctionCallback);
console.log(f);
