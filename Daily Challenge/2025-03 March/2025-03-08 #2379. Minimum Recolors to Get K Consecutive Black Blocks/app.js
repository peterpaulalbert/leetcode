console.log(minimumRecolors('WBBWWBBWBW', 7)); // expected: 3
console.log('-------------------------------------------------------')
console.log(minimumRecolors('WBWBBBW', 2)); // expected: 0
console.log('-------------------------------------------------------')


/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
function minimumRecolors(blocks, k) {
	let maxConsecutive = 0;
	for (let i = 0; i < blocks.length - k + 1; i++) {
		let consecutive = 0;
		for (let j = i; j < i + k; j++) {
			if (blocks[j] === 'B') {
				consecutive++;
			}
		}
		if (consecutive > maxConsecutive) {
			maxConsecutive = consecutive;
		}
	}
	return k - maxConsecutive;
};