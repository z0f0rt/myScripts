// let arr = [1, 2, 3, 4, 5];
// let summ = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
// console.log(summ);

// let week = {
//   monday: 1,
//   tuesday: 2,
//   wednesday: 3,
//   thursday: 4,
//   friday: 5,
//   saturday: 6,
//   sunday: 7,
// };
// console.log(week);

// let month = {
//   January: 1,
//   February: 2,
//   March: 3,
//   April: 4,
//   May: 5,
//   June: 6,
//   Jule: 7,
//   August: 8,
//   September: 9,
//   October: 10,
//   November: 11,
//   December: 12,
// };
// console.log(month["April"]);

// let fio = { name: "Dmitry", surname: "Orlov", patronomic: "Sergeevich" };
// console.log(fio["surname"] + " " + fio["name"] + " " + fio["patronomic"]);
// console.log(fio.surname + " " + fio.name + " " + fio.patronomic);

// let obj = {
//   "1a": 1,
//   b2: 2,
//   "c-c": 3,
//   "d 4": 4,
//   e5: 5,
// };

// console.log(obj["1a"]);
// console.log(obj.b2);
// console.log(obj["c-c"]);
// console.log(obj["d 4"]);
// console.log(obj.e5);

// obj.f = 6;
// obj.g = 7;
// obj.р = 8;
// console.log(obj);
// let keys = Object.keys(obj);
// let lenghtObj = Object.keys(obj).length;
// console.log("Все ключи объекта: " + keys);
// console.log("Длина объекта: " + lenghtObj + " элементов");

// let obj = { x: 1, y: 2, z: 3 };

// let prop = "y";
// console.log(obj[prop]);

// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj );

// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj['x'] );

// let arr = ["a", "b", "c", "d", "e"];
// let c = 0;
// for (let elem of arr) {
//   if (elem === "f") {
//     c++;
//   } else {
//   }
// }
// if (c == 1) {
//   console.log("++");
// } else {
//   console.log("--");
// }

// let k = 15;
// if (k <= 11) {
//   console.log("Первая декада месяца");
// } else if (k > 11 && k <= 21) {
//   console.log("Вторая декада месяца");
// } else if (k > 21 && k <= 31) {
//   console.log("Третья декада месяца");
// }

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
// ];
// console.log(arr[3][2] + arr[1][1] + arr[2][0] + arr[0][0]);

// let arra = [
//   [1, 2, 3, [4, 5, [6, 7]]],
//   [8, [9, 10]],
// ];
// let arra3 = arra[0][3][2][0] + arra[0][3][2][1];
// console.log(arra3);
// let arra2 = arra[0][3][0] + arra[0][3][1];
// console.log(arra2);
// let arra1 = arra[0][0] + arra[0][1] + arra[0][2];
// console.log(arra1);
// let firstSum = arra1 + arra2 + arra3;
// console.log(firstSum);
// let arra4 = arra[1][1][0] + arra[1][1][1];
// console.log(arra4);
// let arra5 = arra[1][0];
// console.log(arra5);
// let secondSum = arra4 + arra5;
// console.log(secondSum);
// let thirdSum = firstSum + secondSum;
// console.log(thirdSum);

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let subArr of arr) {
//   for (let elem of subArr) {
//     sum = sum + elem;
//   }
// }
// console.log(sum);

// let arr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8],
//   [9, 10],
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     sum = sum + arr[i][j];
//   }
// }
// console.log(sum);

// let arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     for (let k = 0; k < arr[i][j].length; k++) {
//       sum = sum + arr[i][j][k];
//     }
//   }
// }
// console.log(sum);
// ==========================================НЕ ПОНИМАЮ ПОЧЕМУ НЕ РАБОТАЕТ=============UPD.20:23=РЕШИЛ=12.08.2022==================================

// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];

//   for (let j = 0; j <= 5; j++) {
//     arr[i].push(j);
//   }
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 4; j++) {
//     arr[i].push("x");
//   }
// }
// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 1; j <= 5; j++) {
//     arr[i].push(j);
//   }
// }

// console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];

//   for (let j = 1; j <= 5; j++) {
//     arr[i].push(j);
//   }
// }

// console.log(arr);

// let arr = [];
// let k = 1;
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 3; j++) {
//     arr[i].push(k);
//     k++;
//   }
// }
// console.log(arr);

// [[1, 2], [3, 4], [5, 6], [7, 8]]
// let arr = [];
// let s = 1;
// for (let i = 0; i < 4; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 2; j++) {
//     arr[i].push(s++);
//   }
// }
// console.log(arr);

// [
//   [2, 4, 6],
//   [8, 10, 12],
//   [14, 16, 18],
//   [20, 22, 24],
// ];
// let arr = [];
// let s = 2;
// for (let i = 0; i < 4; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 3; j++) {
//     arr[i].push(s++);
//     s++;
//   }
// }
// console.log(arr);

// let arr = [];
// let k = 1;
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 3; j++) {
//     arr[i].push(k++);
//   }
// }

// console.log(arr);

// let obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };
// console.log(
//   obj["key1"]["key1"] +
//     obj["key1"]["key2"] +
//     obj["key1"]["key3"] +
//     obj["key2"]["key1"] +
//     obj["key2"]["key2"] +
//     obj["key2"]["key3"] +
//     obj["key3"]["key1"] +
//     obj["key3"]["key2"] +
//     obj["key3"]["key3"]
// );

// let obj = {
//   a: {
//     1: 11,
//     2: 12,
//     3: 13,
//   },
//   b: {
//     1: 21,
//     2: 22,
//     3: 23,
//   },
//   c: {
//     1: 31,
//     2: 32,
//     3: 33,
//   },
// };
// let sum = 0;
// for (let key in obj) {
//   let subObj = obj[key];

//   for (let subKey in subObj) {
//     sum = sum + subObj[subKey];
//   }
// }
// console.log(sum);

// let obj = {
//   1: {
//     1: {
//       1: 111,
//       2: 112,
//       3: 113,
//     },
//     2: {
//       1: 121,
//       2: 122,
//       3: 123,
//     },
//   },
//   2: {
//     1: {
//       1: 211,
//       2: 212,
//       3: 213,
//     },
//     2: {
//       1: 221,
//       2: 222,
//       3: 223,
//     },
//   },
//   3: {
//     1: {
//       1: 311,
//       2: 312,
//       3: 313,
//     },
//     2: {
//       1: 321,
//       2: 322,
//       3: 323,
//     },
//   },
// };
// let summ = 0;
// for (let i = 1; i < 4; i++) {
//   let subObj = obj[i];
//   for (let key in subObj) {
//     let subsubObj = subObj[key];
//     for (let subsubKey in subsubObj) {
//       summ = summ + subObj[key][subsubKey];
//     }
//   }
// }
// console.log(summ);
// for (let key in obj) {
//   let subObj = obj[key];
//   for (let subKey in subObj) {
//     let subsubObj = subObj[key];
//     for (let subsubKey in subsubObj) {
//       summ = summ + subObj[subKey][subsubKey];
//     }
//   }
// }
// console.log(summ);

// let obj1 = {1: {1: 2, 2: 4, 3: 4,},//10
// 	       2: {1: 4, 2: 3, 3: 2,},//9
//            3: {1: 1, 2: 1, 3: 1,},//3
//           };
//  let summ1 = 0;
//  for(let i = 1;i<4; i++){
//      let subObj = obj1[i];
//      for(let key in subObj){
//    summ1 =  summ1 + subObj[key]
//      }
//  }
//  console.log(summ1);
// ==================================НЕ ВИЖУ ОШИБКИ. НЕ СЧИТАЕТ СУММУ ПОСЛЕДНЕГО ПОДМАССИВА.=====================================

// let data = {
//   1: ["data11", "data12", "data13"],
//   2: ["data21", "data22", "data23"],
//   3: ["data31", "data32", "data33"],
//   4: ["data41", "data42", "data43"],
// };
// for (let key in data) {
//   for (let elem of data[key]) {
//     console.log(elem);
//   }
// }

// let employees = [
//   {
//     name: "Иван",
//     salary: 300,
//   },
//   {
//     name: "Александр",
//     salary: 400,
//   },
//   {
//     name: "Виктор",
//     salary: 500,
//   },
// ];
// for (let elem of employees) {
//   console.log(elem.name + " - " + elem.salary + " $");
// }

// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//   },
//   {
//     name: "name2",
//     salary: 400,
//   },
//   {
//     name: "name3",
//     salary: 500,
//   },
// ];
// let sum = 0;
// for (let elem of employees) {
//   sum = sum + elem.salary;
// }
// console.log(sum);

// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//     age: 28,
//   },
//   {
//     name: "name2",
//     salary: 400,
//     age: 29,
//   },
//   {
//     name: "name3",
//     salary: 500,
//     age: 30,
//   },
//   {
//     name: "name4",
//     salary: 600,
//     age: 31,
//   },
//   {
//     name: "name5",
//     salary: 700,
//     age: 32,
//   },
// ];
// // Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
// let sum = 0;
// for (let elem of employees)
//   if (elem.age >= 30) {
//     console.log(elem.salary);
//   }

// let affairs = {
//   2018: {
//     11: {
//       29: ["дело111", "дело112", "дело113"],
//       30: ["дело121", "дело122", "дело123"],
//     },
//     12: {
//       30: ["дело211", "дело212", "дело213"],
//       31: ["дело221", "дело222", "дело223"],
//     },
//   },
//   2019: {
//     12: {
//       29: ["дело311", "дело312", "дело313"],
//       30: ["дело321", "дело322", "дело323"],
//       31: ["дело331", "дело332", "дело333"],
//     },
//   },
// };
// let year = 2019;
// let month = 12;
// let day = 31;
// let work = 2;
// console.log(affairs[year][month][day][work]);

// let obj = {
//   key1: {
//     key2: "12",
//     key3: "13",
//   },
//   key2: {
//     key4: "24",
//     key5: "25",
//   },
// };

// let key1 = "key2";
// let key2 = "key4";
// console.log(obj[key1][key2]);

// let affairs = {
//   "2019-12-28": ["data11", "data12", "data13"],
//   "2019-12-29": ["data21", "data22", "data23"],
//   "2019-12-30": ["data31", "data32", "data33"],
// };
// affairs["2019-12-29"].push("data24");
// affairs["2019-12-30"].push("data34");
// affairs["2019-12-30"].push("data35");
// affairs["2019-12-31"] = [];
// affairs["2019-12-31"].push("data41");
// affairs["2019-12-31"].push("data42");
// affairs["2019-12-31"].push("data43");
// affairs["2019-12-31"].push("data44");
// affairs["2019-12-31"].push("data45");
// affairs["2019-12-31"].push("data46");

// console.log(affairs);

// let students = {
//   group1: {
//     subgroup11: ["student111", "student112", "student113"],
//     subgroup12: ["student121", "student122", "student123"],
//   },
//   group2: {
//     subgroup21: ["student211", "student212", "student213"],
//     subgroup22: ["student221", "student222", "student223"],
//   },
//   group3: {
//     subgroup31: ["student311", "student312", "student313"],
//     subgroup32: ["student321", "student322", "student323"],
//   },
// };
// students["group1"]["subgroup11"].push("student114");
// students["group1"]["subgroup13"] = [];
// students["group4"] = [];
// students["group4"]["subgroup41"] = [];
// students["group4"]["subgroup41"].push("student411");
// students["group4"]["subgroup41"].push("student412");
// console.log(students);

// function func(num1, num2) {
//   if (num1 > 0 && num2 > 0) {
//     return num1 * num2;
//   } else {
//     return num1 - num2;
//   }
// }
// console.log(func(-204, -200));

// let num = 2;
// function sqrt(num) {
//   return Math.sqrt(num);
// }

// function round(num) {
//   return num.toFixed(3);
// }
// let res = round(sqrt(2));
// console.log(res);

// let res;
// function sqrt(num) {
//   return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// function round(num) {
//   return num.toFixed(3);
// }

// res = sum(sqrt(2), sqrt(3), sqrt(4));
// res = round(res);
// console.log(res);

// function func(num) {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(func(5));

// function test() {
// 	let num1 = 1;

// 	return function() {
// 		return num1 + num2;
// 	}
// }

// let num2 = 2;
// let func = test();
// console.log(func());

// let counter = 0;

// function test() {
//   return function () {
//     let counter = 0;
//     console.log(counter);
//     counter++;
//   };
// }

// let func1 = test();
// let func2 = test();

// func1();
// func1();
// func2();
// func2();

// function func() {
// 	let num = 0;

// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// };

// func()();
// func()();
// func()();

// let counter = 0;

// function test() {
// 	return function() {
// 		console.log(counter);
// 		counter++;
// 	};
// };

// let func = test;

// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();

// function test() {
// 	let counter = 0;

// 	return function() {
// 		return function() {
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };

// let func = test();

// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();

// function func(num1, num2, num3, num4, num5) {
//   return num1 + num2 + num3 + num4 + num5;
// }
// let res = func(...[1, 2], ...[3, 4, 5]);
// console.log(res);

// function func(n1, n2, n3, n4, n5, n6, n7, n8) {
// 	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
// }

// console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );

// function func(...nums) {
//   let sum = 0;
//   let sred;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }

//   return sum/nums.length;
// }

// let result = func(1, 2, 3, 4);
// console.log(result); 
