console.log(smallestNumber("IIIDIDDD")); // expected: 123549876
console.log('-------------------------------------------------------')
console.log(smallestNumber("DDD")); // expected: 4321
console.log('-------------------------------------------------------')

/**
 * @param {string} pattern
 * @return {string}
 */
function smallestNumber(pattern) {
	let output = '';
	let stack = [];

	for (let i = 0; i <= pattern.length; i++) {
		stack.push(i + 1);

		if (pattern[i] === 'I' || i === pattern.length) {
			while (stack.length) {
				output += stack.pop();
			}
		}

	}

	return output;
}