const creditCardObsure = (num) => {
  if (typeof num !== "number") {
    return `Please only input numbers, (${num}) is a (${typeof num}) not a number`;
  } else {
    if ([num].join("").length < 12 || [num].join("").length > 16) {
      return `Not a valid credit card number, the number you enter was ${
        [num].join(",").length
      } digits long`;
    }
  }

  const newNum = num
    .toString()
    .split("")
    .map((digit, index, arr) => (index < arr.length - 4 ? "*" : digit))
    .join("");

  return newNum;
};

module.exports = creditCardObsure;
