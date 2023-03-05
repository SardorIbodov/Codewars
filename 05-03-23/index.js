// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"

const mergeStrings = (first, second) => {
	let result = "";
  for (let i = 1; i <= first.length; i++) {
    if(second.startsWith(first.slice(-i))) {
			result = first.concat(second.slice(i));
		}
  }
	if(!result) result = first.concat(second)
	return result;
};
