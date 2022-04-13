"use strict";
let string1 = "Система контроля версий";

let string2 = "это специальная технология, которую можно";

let string3 = "подключить к любому проекту ";

string1 = string1 + " " + string2 + " " + string3;

// К символам строки можно обращаться как к элементам массива по индексу
// console.log(string1[0] + string1[57] + string1[8] + string1[6]);

let x = string1.split(" ");
// console.log(x);
let y = x.join(" # ");
// console.log(y);

