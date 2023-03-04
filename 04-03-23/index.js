// Ch4113ng3
const nerdify = (txt) =>
  [...txt]
    .map((v) =>
      v === "A" || v === "a"
        ? 4
        : v === "E" || v === "e"
        ? 3
        : v === "l"
        ? 1
        : v
    )
    .join("");

// check digit
const checkDigit = (number, index1, index2, digit) => {
	const max = index1 >= index2 ? index1 : index2;
	const min = index1 >= index2 ? index2 : index1;
	return `${number}`.slice(min, max + 1).includes(`${digit}`);
};
