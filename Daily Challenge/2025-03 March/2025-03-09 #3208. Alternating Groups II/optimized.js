console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3)); // expected: 3
console.log('-------------------------------------------------------')
console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1, 0, 1], 6)); // expected: 2
console.log('-------------------------------------------------------')
console.log(numberOfAlternatingGroups([1, 1, 0, 1], 4)); // expected: 0
console.log('-------------------------------------------------------')


/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
function numberOfAlternatingGroups(colors, k) {
	let groups = 0;
	let previous = colors[0];
	let alternating = 1;
	for (let i = 1; i < colors.length + k - 1; i++) {
		let index = i % colors.length;
		if (previous === colors[index]) {
			alternating = 1;
			previous = colors[index];
			continue;
		}
		alternating++;
		if(alternating>=k){
			groups++;
		}
		previous = colors[index];
	}
	return groups;
};