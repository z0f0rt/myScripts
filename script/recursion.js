"use strict";
// let arr = [1, 3, 3, 4, 5];
// let i = 0;

// function getElem(arr) {
//   console.log(arr[i]);
//   i++;
//   if (i < arr.length) {
//     getElem(arr);
//   }
// }
// getElem(arr);

//=========================================================================

//СУММА ЭЛЕМЕНТОВ МАССИВА
// function sum(arr) {
// 	let sum = arr.shift();

// 	if (arr.length !== 0) {
// 		sum += sum(arr);
// 	}

// 	return sum;
// }

// console.log(sum([1, 2, 3]));

//=========================================================================

// let arr = [1, 2, 3];

// function getSum(arr) {
// 	let sum = getSquare(arr.shift());//2
// 	if (arr.length !== 0) {
//         sum += getSum(arr);
// 	}

// 	return sum;
// }
//     function getSquare (num){
//         return num**2;
//     }

// console.log(getSum(arr));

//=========================================================================

//Задача 1/ Дана следующая функция с коллбэком: Упростите коллбэк через стрелочную функцию.

// let result1 = every([1, 2, 3, 4, 5], function(elem) { if (elem > 0) { return true; } else { return false; } });
// let arr = [1, 2, 3, 4, 5];
// let result2 = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };
// let x = result2(arr);
// console.log(x);

//=========================================================================

// let arr = [1, -2, -3, 4, 5];
// function callback(elem) {
//   if (elem > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

//=========================================================================

// let kakapupu = (array, arriveCallback) => {
//   for (let i = 0; i < array.length; i++) {
//     if(arriveCallback(array[i])){
//         console.log(arr[i])
//     }
//   }
// };
// kakapupu(arr, callback);

// let func2 = (num1, num2) => {
// 	return num1 * num2;
// }
// console.log(func2(2,2));

//=========================================================================

//Задача 2.
// let result = every([1, 2, 3, 4, 5], function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

//=========================================================================

// let callback = (elem,index) => elem*index>10;

// let getDigit = (array, funcCallbacks) => {
// for(let i =0; i<array.length;i++){
// if(funcCallbacks(array[i],i)){
// console.log(array[i])
// }
// }
// }

// let arr = [100000, 11, 6, 4, 5];
// getDigit(arr,callback);

// let x = -8;
// let y = 54;
// let hey;
// let arr = [];
// for (let i = x - 1; i < y; i++) {
//   arr.push(x++);
// }

// console.log(arr);


