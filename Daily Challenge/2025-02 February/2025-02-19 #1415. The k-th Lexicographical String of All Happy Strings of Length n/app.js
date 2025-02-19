
console.log(getHappyString(1, 3)); // expected: "c"
console.log('-------------------------------------------------------')
console.log(getHappyString(1, 4)); // expected: ""
console.log('-------------------------------------------------------')
console.log(getHappyString(3, 9)); // expected: "cab"
console.log('-------------------------------------------------------')

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getHappyString(n, k) {
	var output = [];
	buildCombinations(output, ['a', 'b', 'c'], "", n);

	output.sort();
	if (output.length < k) {
		return "";
	}
	return output[k - 1];
};


function buildCombinations (output, letters, prefix, n) {
	if (n === 0) {
		output.push(prefix);
		return;
	}
	for (var i = 0; i < letters.length; i++) {
		var newPrefix;

		if (prefix[prefix.length - 1] !== letters[i]) {
			newPrefix = prefix + letters[i];
			buildCombinations(output, letters, newPrefix, n - 1);
		}

	}
}
