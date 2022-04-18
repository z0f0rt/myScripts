let numbers = [12, 23, 45, 56, 78, 89];
numbers.splice(0, 2, "Rather", "Exam");
console.log(`Изменённый оригинальный массив через splice: ${numbers}`);

let appleZIGZAG = ["Катя", "Ваня", "Саша", "Маша", "Дима"];
let newappleZIGZAG = appleZIGZAG.slice(1, 4);
console.log("Новый изменённый масcив урезанный через slice: " + newappleZIGZAG);
console.log("Оригинальный неизменённый массив: " + appleZIGZAG);

let contactAZZ = appleZIGZAG.concat("Володя");
console.log("Изменённый масиив через concat с Володей: " + contactAZZ);
