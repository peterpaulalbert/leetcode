console.log(checkPowersOfThree(12)); // expected: true
console.log('-------------------------------------------------------')
console.log(checkPowersOfThree(91)); // expected: true
console.log('-------------------------------------------------------')
console.log(checkPowersOfThree(21)); // expected: false
console.log('-------------------------------------------------------')

/**
 * @param {number} n
 * @return {boolean}
 */
function checkPowersOfThree(n) {
	if (n % 3 === 2) {
		return false;
	}

	for (let i = 16; i >= 0; i--) {
		if (n >= (3 ** i)) {
			n = n - (3 ** i);
		}
	}
	return (n === 0);
}