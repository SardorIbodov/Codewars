// Square(n) Sum
const squareSum = (numbers) => numbers.reduce((c, v) => c + v ** 2, 0);

// ASCII Total
const uniTotal = (string) => {
  return string.split("").reduce((v, c) => {
    if (c === "") c = 0;
    return v + c.charCodeAt();
  }, 0);
};
