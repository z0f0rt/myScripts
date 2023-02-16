"use strict";
const getNumberRadix = (number, radix) => {
  let correctNumber = +number;
  let correctRadix = +radix;
  if (
    typeof correctNumber == "number" &&
    typeof correctRadix == "number" &&
    Number.isInteger(correctNumber) &&
    Number.isInteger(correctRadix) &&
    correctNumber > 0 &&
    2 <= correctRadix &&
    correctRadix <= 16
  ) {
    return correctNumber.toString(correctRadix);
  }
  throw new Error(
    "Функция getNumberRadix была вызвана с некорректными параметрами"
  );
};

