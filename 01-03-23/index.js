// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
const quarterOf = (month) => Math.ceil(month / 3);

// Complete the solution so that it reverses the string passed into it.
const solution = (str) => str.split("").reverse().join("");

// This function should return an object, but it's not doing what's intended. What's wrong?
// function mystery() {
//   var results =
//     {sanity: 'Hello'};
//   return
//     results;
// }
const mystery = () => {
  sanity: "Hello";
};

// Distance between points in 2D
const distanceBetweenPoints = (a, b) => Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2);