console.log(chunk([1, 2, 3, 4, 5], 1)); // expected: [[1],[2],[3],[4],[5]]
console.log('-------------------------------------------------------')

console.log(chunk([1, 9, 6, 3, 2], 3)); // expected: [[1,9,6],[3,2]]
console.log('-------------------------------------------------------')

console.log(chunk([8, 5, 3, 2, 6], 6)); // expected: [[8,5,3,2,6]]
console.log('-------------------------------------------------------')

console.log(chunk([], 1)); // expected: []
console.log('-------------------------------------------------------')

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
function chunk(arr, size) {
	let output = [];
	let chunk = [];
	for (let i = 0; i < arr.length; i++) {
		let j = 0;
		chunk.push(arr[i]);
		if (chunk.length === size || i === arr.length - 1) {
			output.push(chunk);
			chunk = [];
		}
		j++;
	}
	return output;
};