console.log(constructDistancedSequence(3)); // expected: [3,1,2,3,2]
console.log('-------------------------------------------------------')
console.log(constructDistancedSequence(5)); // expected: [5,3,1,4,3,5,2,4,2]
console.log('-------------------------------------------------------')


/**
 * @param {number} n
 * @return {number[]}
 */
function constructDistancedSequence(n) {
	let output = new Array((2 * n) - 1).fill(0);
	let stack = [];
	let i = 0;
	while (i < output.length) {
		let maxN = n;
		if (output[i] != 0) {
			const old = output[i];
			if (old > 1 && old + i < output.length && output[old + i] == old) {
				output[old + i] = 0;
			}
			output[i] = 0;
			maxN = old - 1;
		}
		for (; maxN >= 1; --maxN) {
			if (output.findIndex((a) => a == maxN) == -1) break;
		}
		if (maxN < 1) {
			if (stack.length > 1) {
				let top = stack.pop();
				const val = output[top];
				if (val > 1 && top + val < output.length) {
					output[val + top] = 0;
				}
				i = top;
				if (output[i] == 1) {
					output[i] = 0;
					i = stack.pop();
				}
			}
			continue;
		}

		output[i] = maxN;
		stack.push(i);
		if (maxN == 1 || (i + maxN < output.length && output[i + maxN] == 0)) {
			if (maxN > 1) {
				output[i + maxN] = maxN;
			}
			while (i < output.length && output[i] != 0) ++i;
		} else {
			stack.pop();
		}
	}
	return output;
}