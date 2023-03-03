// Square(n) Sum
const squareSum = (numbers) => numbers.reduce((c, v) => c + v ** 2, 0);

// ASCII Total
const uniTotal = (string) => {
  return string.split("").reduce((v, c) => {
    if (c === "") c = 0;
    return v + c.charCodeAt();
  }, 0);
};

// Function 1 - hello world
const greet = () => "hello world!";

// Exclusive or (xor) operator
const xor = (a, b) => {
  if (typeof a === "boolean" && typeof b === "boolean") {
    return a === b ? false : true;
  }
};
const otherWayXor = (a, b) => !!(a ^ b);

// Power
const numberToPower = (number, power) => {
  let result = number;
  if (power === 0) return 1;
  else if (power === 1) return number;
  else {
    for (let i = 2; i <= power; i++) {
      result *= number;
    }
  }
  return result;
};
const numberToPowerOtherWay = (number, power) => {
  if (power === 1) {
    return number;
  }
  return number * numberToPowerOtherWay(number, power - 1);
};

// Greet me
const greetMe = (name) =>
  `Hello ${name
    .toLowerCase()
    .replace(name.toLowerCase()[0], name.toLowerCase()[0].toUpperCase())}!`;

// Chess
function chessBoard(rows, columns) {
  let result = [];
  let line = [];
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      i % 2 === 0
        ? j % 2 === 1
          ? line.push("X")
          : line.push("0")
        : j % 2 === 1
        ? line.push("0")
        : line.push("X");
    }
    result.push(line);
    line = [];
  }
  return result;
}
