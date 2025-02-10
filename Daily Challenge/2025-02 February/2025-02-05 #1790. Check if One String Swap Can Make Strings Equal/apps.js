console.log(`areAlmostEqual: ${areAlmostEqual("bank", "kanb")}`); // expected: true
console.log('-------------------------------------------------------')
console.log(`areAlmostEqual: ${areAlmostEqual("attack", "defend")}`); // expected: false
console.log('-------------------------------------------------------')
console.log(`areAlmostEqual: ${areAlmostEqual("kelb", "kelb")}`); // expected: true
console.log('-------------------------------------------------------')

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function areAlmostEqual(s1, s2) {
	// same word
	if (s1 === s2) {
		return true;
	}

	// different lengths
	if (s1.length !== s2.length) {
		return false;
	}

	let diffs = [];
	for (let i = 0; i < s1.length; i++) {
		if (s1.charAt(i) !== s2.charAt(i)) {
			diffs.push(i);
		}
	}
//	console.log(`s1=${s1}, s2=${s2}, diffs=${diffs}`);

	// difference is >2 characters
	if (diffs.length > 2) {
		return false;
	}
	// difference is 2 characters
	if (s1.charAt(diffs[0]) === s2.charAt(diffs[1]) && s1.charAt(diffs[1]) === s2.charAt(diffs[0])) {
		return true;
	}
	else {
		return false;
	}
};
