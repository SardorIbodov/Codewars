// Keep order
const keepOrder = (ary, val) => {
  let result = [];
  result.push(ary, val);
  result = result.flat(1).sort((a, b) => a - b);
  return result.indexOf(val);
};

// Vowel one
const vowelOne = (s) => {
  const base = ["a", "e", "i", "o", "i"];
  let result = "";
  for (let char of s.toLowerCase()) {
    base.includes(char) ? (result += "1") : (result += "0");
  }
  return result;
};

// Band name generator
const bandNameGenerator = (str) => {
  let result = "";
  str[0].toLowerCase() === str[str.length - 1].toLowerCase()
    ? (result = `${str[0].toUpperCase()}${str.slice(1)}${str.slice(1)}`)
    : (result = `The ${str[0].toUpperCase()}${str.slice(1)}`);
  return result;
};
