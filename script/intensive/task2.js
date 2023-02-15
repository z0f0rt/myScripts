"use strict";
const getNumberRadix = (number, radix) => {
  if (
    !!Number(number) &&
    Number(number) > 0 &&
    Number.isInteger(Number(number))
  ) {
    if (2 <= radix && radix <= 16 && !!Number(radix)) {
      return number.toString(radix);
    }
  }
  return "Error!";
};

console.log(getNumberRadix(4, 2));
