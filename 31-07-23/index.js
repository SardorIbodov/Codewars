const addAll = (numbers) => {
  const cost = [];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    cost.push(sum);
  }
	cost.splice(0, 1);
  return cost.reduce((c, v) => c + v);
};
console.log(addAll([1, 2, 3]));
