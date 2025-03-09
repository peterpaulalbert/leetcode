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
	for (let i = 0; i < colors.length; i++) {
		let alternates = true;
		let previous = colors[i];
		for (let j = 1; j < k; j++) {
			let current = colors[(i + j) % colors.length];
			if(previous === current){
				alternates = false;
				break;
			}
			previous = current;
		}
		if(alternates){
			groups++;
		}
	}
	return groups;
};