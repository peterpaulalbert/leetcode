console.log(coloredCells(1)); // expected: 1
console.log('-------------------------------------------------------')
console.log(coloredCells(2)); // expected: 5
console.log('-------------------------------------------------------')
console.log(coloredCells(3)); // expected: 13
console.log('-------------------------------------------------------')
console.log(coloredCells(4)); // expected: 25
console.log('-------------------------------------------------------')
console.log(coloredCells(5)); // expected: 41
console.log('-------------------------------------------------------')


/**
 * @param {number} n
 * @return {number}
 */
function coloredCells(n) {
	let sum = 1;
	for (let i = 1; i < n; i++) {
		sum += 4 * i
	}
	return sum;
};