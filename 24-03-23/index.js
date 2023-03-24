// 8 kyu
// const howMuchWater = (water, load, clothes) => {
//   return load * 2 < clothes
//     ? "Too much clothes"
//     : load > clothes * 2 || load > clothes
//     ? "Not enough clothes"
//     : +(water * 1.1 ** (clothes - load)).toFixed(2);
// };

// 7 kyu
// const divCon = (x) => x.reduce((v, c) => typeof c === "number" ? v + c : v - c, 0);

// 6 kyu
// const longestRepetition = (s) => {
//   let result;
//   if (s.length === 0) {
//     result = ["", 0];
//     return result;
//   } else {
//     let rep = 1;
//     let storage = [];
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === s[i + 1]) {
//         rep++;
//       } else {
//         storage.push([s[i], rep]);
//         rep = 1;
//       }
//     }
//     result = storage[0];
//     storage.forEach((item) => {
//       if (item[1] > result[1]) result = item;
//     });
//     return result;
//   }
// };

