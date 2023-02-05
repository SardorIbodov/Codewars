// Nearest square number
// 111 => 121, 99 => 100 ....
// 1st way
// let nearestSq1 = (n) => {
// 	let result;
// 	(Math.abs(n - parseInt(Math.sqrt(n)) ** 2) > Math.abs(n - (parseInt(Math.sqrt(n)) + 1) ** 2)) ?
// 	result = (parseInt(Math.sqrt(n)) + 1) ** 2 :
// 	result =  (parseInt(Math.sqrt(n))) ** 2;
// 	return result;
// };
// 2nd way
// let nearestSq2 = n => Math.round(Math.sqrt(n)) ** 2;

// Help with infinite loop
// let createArray = number => {
//   let newArray = [];
//   for(let counter = 1; counter <= number; counter++) {
//     newArray.push(counter);
//   }
//   return newArray;
// }

// The IF function
// let _if = (bool, func1, func2) => bool ? func1() : func2();

// Trim the string
// let trim = (str, size) => size >= str.length ? str :
// size  <= 3 ? str.slice(0, size) + "..."
// : str.slice(0, size - 3) + "...";
