console.log(clearDigits("abc")); // expected: "abc"
console.log('-------------------------------------------------------')
console.log(clearDigits("cb34")); // expected: ""
console.log('-------------------------------------------------------')

/**
 * @param {string} s
 * @return {string}
 */
function clearDigits(s) {
	let deleted = [];
	for (let i = 0; i < s.length; i++) {
		if (!isNaN(parseInt(s.charAt(i), 10))) {
			let found = false; 
			for (let j = i - 1; j >= 0 && !found; j--) {
				if (isNaN(parseInt(s.charAt(j), 10)) && !deleted[j]) {
					found = true;
					deleted[i] = true;
					deleted[j] = true;
				}
			}
		}
	}

	let output = "";
	for (let i = 0; i < s.length; i++) {
		if (!deleted[i]) {
			output += s.charAt(i);
		}
	}
	return output;
};