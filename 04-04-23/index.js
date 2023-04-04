// 7kyu, Link => https://www.codewars.com/kata/56d19b2ac05aed1a20000430/train/javascript
const betweenExtremes = (numbers) =>
  Math.max(...numbers) - Math.min(...numbers);

// 6kyu, Link => https://www.codewars.com/kata/58bf67eb68d8469e3c000041
const findDuplicatePhoneNumbers = (phoneNumbers) => {
  let base = {
    ABC: 2,
    DEF: 3,
    GHI: 4,
    JKL: 5,
    MNO: 6,
    PRS: 7,
    TUV: 8,
    WXY: 9,
  };
  let duplicates = [];
  let result = [];
  let updated = phoneNumbers.map((v) => {
    v = v.replaceAll("-", "");
    v = v.split("");
    v = v.map((i) => {
      i = i.toUpperCase();
      for (let key in base) {
        if (key.includes(i)) {
          i = base[key];
        }
      }
      return i;
    });
    v.splice(3, 0, "-");
    return v.join("");
  });
	updated = updated.sort((a, b) => a.localeCompare(b));
  let count = 1;
  for (let i = 0; i < updated.length; i++) {
    if (updated[i] === updated[i + 1]) {
      count++;
    } else {
			duplicates.push({ count: count, number: updated[i] });
			count = 1;
		}
  }
  duplicates.forEach((v, i) => {
		if(v.count > 1) {
			result.push((v.number += ":" + v.count));
		}
  });
  return result;
};

