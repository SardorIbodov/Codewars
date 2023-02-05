// Nearest square number
// 111 => 121, 99 => 100 ....
// 1st way
let nearestSq1 = (n) => {
	let result;
	(Math.abs(n - parseInt(Math.sqrt(n)) ** 2) > Math.abs(n - (parseInt(Math.sqrt(n)) + 1) ** 2)) ?
	result = (parseInt(Math.sqrt(n)) + 1) ** 2 :
	result =  (parseInt(Math.sqrt(n))) ** 2;
	return result;
};
console.log(nearestSq1(13));
// 2nd way
let nearestSq2 = n => Math.round(Math.sqrt(n)) ** 2;
console.log(nearestSq2(13));