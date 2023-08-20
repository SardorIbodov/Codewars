// 8kyu
// LINK => https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript

const cubeChecker = (volume, side) =>
  side > 0 && side ** 3 === volume ? true : false;

// 7kyu
// LINK => https://www.codewars.com/kata/596343a24489a8b2a00000a2/train/javascript

// const isItANum = (str) => {
//   let result = "";
//   for (char of str) {
//     if (!isNaN(char) && char !== " ") {
//       result += char;
//     }
//   }
// 	result = result.trim();
//   if (result.length === 0 || result[0] !== "0" || result.length !== 11) return "Not a phone number";
//   else return result;
// };